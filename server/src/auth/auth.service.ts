import { Injectable, BadRequestException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { ConfigService } from '@nestjs/config';
import { User, UserDocument, UserRole } from '../users/user.schema';
import { EmailService } from '../notifications/email.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
    private configService: ConfigService,
    private emailService: EmailService,
  ) {}

  async register(dto: { fullName: string; email: string; password: string; phone: string; role?: UserRole }) {
    const existing = await this.userModel.findOne({ email: dto.email.toLowerCase() }).exec();
    if (existing) {
      throw new BadRequestException('An account with this email address already exists');
    }

    const passwordHash = await bcrypt.hash(dto.password, 12);
    const emailVerificationToken = crypto.randomBytes(32).toString('hex');

    const user = new this.userModel({
      fullName: dto.fullName,
      email: dto.email.toLowerCase(),
      passwordHash,
      phone: dto.phone,
      role: dto.role || UserRole.PATIENT,
      isVerified: false,
      emailVerificationToken,
    });

    await user.save();

    // Trigger verification email
    await this.emailService.sendVerificationEmail(user.email, emailVerificationToken);

    return {
      message: 'Registration successful! Please check your email to verify your account.',
      userId: user._id,
    };
  }

  async login(dto: { email: string; password: string }) {
    const user = await this.userModel.findOne({ email: dto.email.toLowerCase() }).exec();
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { sub: user._id.toString(), email: user.email, role: user.role };
    
    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_ACCESS_SECRET', 'firstchoice_jwt_access_secret_key_2026'),
      expiresIn: '15m',
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET', 'firstchoice_jwt_refresh_secret_key_2026'),
      expiresIn: '7d',
    });

    const { passwordHash, ...userWithoutPassword } = user.toObject();

    return {
      accessToken,
      refreshToken,
      user: userWithoutPassword,
    };
  }

  async refreshTokens(refreshToken: string) {
    if (!refreshToken) {
      return null;
    }
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET', 'firstchoice_jwt_refresh_secret_key_2026'),
      });
      const user = await this.userModel.findById(payload.sub).select('-passwordHash').exec();
      if (!user) {
        return null;
      }

      const newPayload = { sub: user._id.toString(), email: user.email, role: user.role };
      const newAccessToken = this.jwtService.sign(newPayload, {
        secret: this.configService.get<string>('JWT_ACCESS_SECRET', 'firstchoice_jwt_access_secret_key_2026'),
        expiresIn: '15m',
      });

      return { accessToken: newAccessToken, user };
    } catch (err) {
      return null;
    }
  }

  async verifyEmail(token: string) {
    if (!token) {
      throw new BadRequestException('Token required');
    }
    const user = await this.userModel.findOne({ emailVerificationToken: token }).exec();
    if (!user) {
      throw new BadRequestException('Invalid or expired verification token');
    }

    user.isVerified = true;
    user.emailVerificationToken = null;
    await user.save();

    await this.emailService.sendWelcomeEmail(user.email, user.fullName);

    return { message: 'Email verified successfully! You may now log in.' };
  }

  async forgotPassword(email: string) {
    const user = await this.userModel.findOne({ email: email.toLowerCase() }).exec();
    if (!user) {
      // Return positive message for security privacy
      return { message: 'If an account exists with this email, password reset instructions have been sent.' };
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiry = new Date(Date.now() + 3600000); // 1 hour
    await user.save();

    await this.emailService.sendPasswordReset(user.email, resetToken);

    return { message: 'Password reset instructions have been sent to your email address.' };
  }

  async resetPassword(dto: { token: string; newPassword: string }) {
    const user = await this.userModel.findOne({
      resetPasswordToken: dto.token,
      resetPasswordExpiry: { $gt: new Date() },
    }).exec();

    if (!user) {
      throw new BadRequestException('Invalid or expired password reset token');
    }

    user.passwordHash = await bcrypt.hash(dto.newPassword, 12);
    user.resetPasswordToken = null;
    user.resetPasswordExpiry = null;
    await user.save();

    return { message: 'Password reset successfully! You may now log in with your new password.' };
  }

  async updateProfile(userId: string, dto: { fullName?: string; phone?: string; currentPassword?: string; newPassword?: string }) {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (dto.fullName) user.fullName = dto.fullName;
    if (dto.phone) user.phone = dto.phone;

    if (dto.newPassword) {
      if (!dto.currentPassword) {
        throw new BadRequestException('Current password required to change password');
      }
      const isMatch = await bcrypt.compare(dto.currentPassword, user.passwordHash);
      if (!isMatch) {
        throw new BadRequestException('Incorrect current password');
      }
      user.passwordHash = await bcrypt.hash(dto.newPassword, 12);
    }

    await user.save();

    const { passwordHash, ...updated } = user.toObject();
    return updated;
  }
}
