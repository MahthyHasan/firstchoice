import { Controller, Get, Patch, Body, Req, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('me')
  async getMe(@Req() req: any) {
    const user = await this.usersService.getProfile(req.user._id);
    return { success: true, data: user, message: 'Profile retrieved' };
  }

  @Patch('me')
  async updateMe(@Req() req: any, @Body() body: { fullName?: string; name?: string; phone?: string; address?: string }) {
    const updated = await this.usersService.updateProfile(req.user._id, body);
    return { success: true, data: updated, message: 'Profile updated successfully' };
  }

  @Patch('me/password')
  @HttpCode(HttpStatus.OK)
  async changePassword(@Req() req: any, @Body() body: { currentPassword: string; newPassword: string }) {
    const result = await this.usersService.changePassword(req.user._id, body);
    return { success: true, data: null, message: result.message };
  }
}
