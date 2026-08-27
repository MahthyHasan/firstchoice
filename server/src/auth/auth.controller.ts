import { Controller, Post, Get, Patch, Body, Query, Req, Res, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body: { fullName: string; email: string; password: string; phone: string; role?: any }) {
    const result = await this.authService.register(body);
    return { success: true, data: result, message: result.message };
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: { email: string; password: string }, @Res({ passthrough: true }) res: Response) {
    const result = await this.authService.login(body);
    
    // Set refreshToken cookie (httpOnly, Secure in prod, SameSite=Strict)
    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: false, // Set to true in HTTPS production environment
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return {
      success: true,
      data: {
        accessToken: result.accessToken,
        user: result.user,
      },
      message: 'Logged in successfully',
    };
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('refreshToken', {
      httpOnly: true,
      sameSite: 'strict',
    });
    return { success: true, data: null, message: 'Logged out successfully' };
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(@Req() req: Request) {
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
      return { success: false, data: null, message: 'No active session' };
    }
    const result = await this.authService.refreshTokens(refreshToken);
    if (!result) {
      return { success: false, data: null, message: 'Session expired' };
    }
    return { success: true, data: result, message: 'Access token refreshed' };
  }

  @Get('verify-email')
  async verifyEmail(@Query('token') token: string) {
    const result = await this.authService.verifyEmail(token);
    return { success: true, data: null, message: result.message };
  }

  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  async forgotPassword(@Body('email') email: string) {
    const result = await this.authService.forgotPassword(email);
    return { success: true, data: null, message: result.message };
  }

  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  async resetPassword(@Body() body: { token: string; newPassword: string }) {
    const result = await this.authService.resetPassword(body);
    return { success: true, data: null, message: result.message };
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Req() req: any) {
    return { success: true, data: req.user, message: 'User profile retrieved' };
  }

  @UseGuards(JwtAuthGuard)
  @Patch('profile')
  async updateProfile(@Req() req: any, @Body() body: any) {
    const updated = await this.authService.updateProfile(req.user._id, body);
    return { success: true, data: updated, message: 'Profile updated successfully' };
  }
}
