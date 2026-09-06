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

  private get appUrl(): string {
    return (
      this.configService.get<string>('APP_URL') ||
      this.configService.get<string>('CLIENT_URL') ||
      'https://www.firstcmedical.com'
    );
  }

  private hashToken(token: string): string {
    return crypto.createHash('sha256').update(token).digest('hex');
  }

  async register(dto: { fullName: string; email: string; password: string; phone: string; role?: UserRole }) {
    const existing = await this.userModel.findOne({ email: dto.email.toLowerCase() }).exec();
    if (existing) {
      throw new BadRequestException('An account with this email address already exists');
    }

    const passwordHash = await bcrypt.hash(dto.password, 12);
    const rawToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = this.hashToken(rawToken);

    const user = new this.userModel({
      fullName: dto.fullName,
      email: dto.email.toLowerCase(),
      passwordHash,
      phone: dto.phone,
      role: dto.role || UserRole.PATIENT,
      isEmailVerified: false,
      isVerified: false,
      emailVerificationToken: hashedToken,
      emailVerificationExpires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });

    await user.save();

    const verificationUrl = `${this.appUrl}/api/auth/verify-email?token=${rawToken}&id=${user._id}`;
    await this.emailService.sendVerificationEmail(user.email, user.fullName, verificationUrl);

    return {
      message: 'Registration successful. Please check your email to verify your account.',
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

    if (!user.isEmailVerified && !user.isVerified) {
      throw new UnauthorizedException('Please verify your email address before logging in.');
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

    const { passwordHash, emailVerificationToken, resetPasswordToken, ...userWithoutPassword } = user.toObject();

    return {
      accessToken,
      refreshToken,
      user: userWithoutPassword,
    };
  }

  async verifyEmail(rawToken: string, userId: string): Promise<boolean> {
    if (!rawToken || !userId) {
      return false;
    }
    try {
      const user = await this.userModel.findById(userId).exec();
      if (!user || (!user.emailVerificationToken && !user.isEmailVerified)) {
        return user ? user.isEmailVerified || user.isVerified : false;
      }

      if (user.isEmailVerified || user.isVerified) {
        return true;
      }

      const hashedIncoming = this.hashToken(rawToken);
      const isTokenValid =
        user.emailVerificationToken === hashedIncoming || user.emailVerificationToken === rawToken;

      if (!isTokenValid) {
        return false;
      }

      if (user.emailVerificationExpires && new Date(user.emailVerificationExpires).getTime() < Date.now()) {
        return false;
      }

      user.isEmailVerified = true;
      user.isVerified = true;
      user.emailVerificationToken = null;
      user.emailVerificationExpires = null;
      await user.save();

      return true;
    } catch (err) {
      return false;
    }
  }

  async resendVerification(email: string) {
    if (!email) {
      throw new BadRequestException('Email address is required');
    }
    const user = await this.userModel.findOne({ email: email.toLowerCase() }).exec();
    if (!user) {
      throw new BadRequestException('Account not found with this email address');
    }

    if (user.isEmailVerified || user.isVerified) {
      throw new BadRequestException('Email address is already verified');
    }

    if (user.lastResendAt && Date.now() - new Date(user.lastResendAt).getTime() < 60000) {
      throw new BadRequestException('Please wait 60 seconds before requesting another verification email.');
    }

    const rawToken = crypto.randomBytes(32).toString('hex');
    user.emailVerificationToken = this.hashToken(rawToken);
    user.emailVerificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    user.lastResendAt = new Date();
    await user.save();

    const verificationUrl = `${this.appUrl}/api/auth/verify-email?token=${rawToken}&id=${user._id}`;
    await this.emailService.sendVerificationEmail(user.email, user.fullName, verificationUrl);

    return { message: 'Verification email sent. Please check your inbox.' };
  }

  async forgotPassword(email: string) {
    if (!email) {
      throw new BadRequestException('Email address is required');
    }
    const user = await this.userModel.findOne({ email: email.toLowerCase() }).exec();
    if (!user) {
      return { message: 'If an account exists with this email, password reset instructions have been sent.' };
    }

    const rawToken = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = this.hashToken(rawToken);
    user.resetPasswordExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
    await user.save();

    const resetUrl = `${this.appUrl}/reset-password?token=${rawToken}&id=${user._id}`;
    await this.emailService.sendPasswordReset(user.email, user.fullName, resetUrl);

    return { message: 'Password reset instructions have been sent to your email address.' };
  }

  async resetPassword(dto: { token: string; id?: string; newPassword: string }) {
    if (!dto.token || !dto.newPassword) {
      throw new BadRequestException('Token and new password are required');
    }

    const hashedIncoming = this.hashToken(dto.token);
    let query: any = {
      $or: [
        { resetPasswordToken: hashedIncoming },
        { resetPasswordToken: dto.token },
      ],
      resetPasswordExpiry: { $gt: new Date() },
    };

    if (dto.id) {
      query._id = dto.id;
    }

    const user = await this.userModel.findOne(query).exec();
    if (!user) {
      throw new BadRequestException('Invalid or expired password reset token');
    }

    user.passwordHash = await bcrypt.hash(dto.newPassword, 12);
    user.resetPasswordToken = null;
    user.resetPasswordExpiry = null;
    await user.save();

    return { message: 'Password reset successfully! You may now log in with your new password.' };
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

  async updateProfile(userId: string, dto: { fullName?: string; phone?: string; address?: string; currentPassword?: string; newPassword?: string }) {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (dto.fullName) user.fullName = dto.fullName;
    if (dto.phone) user.phone = dto.phone;
    if (dto.address !== undefined) user.address = dto.address;

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

    const { passwordHash, emailVerificationToken, resetPasswordToken, ...updated } = user.toObject();
    return updated;
  }
}
