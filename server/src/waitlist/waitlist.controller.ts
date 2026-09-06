import { Controller, Post, Get, Delete, Body, Param, Req, UseGuards } from '@nestjs/common';
import { WaitlistService } from './waitlist.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '../users/user.schema';

@Controller('waitlist')
export class WaitlistController {
  constructor(private waitlistService: WaitlistService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() req: any, @Body() body: { service: string; preferredDate: string; preferredTimeRange?: any }) {
    const data = await this.waitlistService.create(req.user, body);
    return { success: true, data, message: 'Added to waitlist' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('my')
  async getMyWaitlist(@Req() req: any) {
    const data = await this.waitlistService.getMyWaitlist(req.user._id);
    return { success: true, data, message: 'My waitlist entries retrieved' };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Get()
  async getAllWaitlist() {
    const data = await this.waitlistService.getAllWaitlist();
    return { success: true, data, message: 'All waitlist entries retrieved' };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req: any) {
    const patientId = req.user.role === UserRole.ADMIN ? undefined : req.user._id;
    const data = await this.waitlistService.remove(id, patientId);
    return { success: true, data, message: data.message };
  }
}
