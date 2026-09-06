import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getProfile(userId: string) {
    const user = await this.userModel.findById(userId).select('-passwordHash -emailVerificationToken -resetPasswordToken').exec();
    if (!user) {
      throw new NotFoundException('User profile not found');
    }
    return user;
  }

  async updateProfile(userId: string, dto: { fullName?: string; name?: string; phone?: string; address?: string }) {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException('User profile not found');
    }

    if (dto.fullName) user.fullName = dto.fullName;
    if (dto.name) user.fullName = dto.name;
    if (dto.phone !== undefined) user.phone = dto.phone;
    if (dto.address !== undefined) user.address = dto.address;

    await user.save();

    const { passwordHash, emailVerificationToken, resetPasswordToken, ...updated } = user.toObject();
    return updated;
  }

  async changePassword(userId: string, dto: { currentPassword: string; newPassword: string }) {
    if (!dto.currentPassword || !dto.newPassword) {
      throw new BadRequestException('Current password and new password are required');
    }

    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isMatch = await bcrypt.compare(dto.currentPassword, user.passwordHash);
    if (!isMatch) {
      throw new BadRequestException('Incorrect current password');
    }

    if (dto.newPassword.length < 6) {
      throw new BadRequestException('New password must be at least 6 characters long');
    }

    user.passwordHash = await bcrypt.hash(dto.newPassword, 12);
    await user.save();

    return { message: 'Password changed successfully' };
  }
}
