import { Controller, Post, Get, Patch, Delete, Body, Param, Query, Req, UseGuards } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '../users/user.schema';
import { ServiceType } from './appointment.schema';

@Controller('appointments')
export class AppointmentsController {
  constructor(private appointmentsService: AppointmentsService) {}

  @Get('availability')
  async getAvailability(
    @Query('date') date: string,
    @Query('service') service?: ServiceType,
  ) {
    const data = await this.appointmentsService.getAvailability(date, service);
    return { success: true, data, message: 'Available slots retrieved' };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Get('heatmap')
  async getHeatmapData() {
    const data = await this.appointmentsService.getHeatmapData();
    return { success: true, data, message: 'Heatmap matrix retrieved' };
  }

  @Post('public')
  async createPublic(
    @Body() body: {
      patientName: string;
      patientEmail: string;
      patientPhone: string;
      serviceType: ServiceType;
      preferredDate: string;
      preferredTime?: string;
      location?: string;
      notes?: string;
    },
  ) {
    const data = await this.appointmentsService.createPublic(body);
    return { success: true, data, message: 'Appointment request submitted successfully!' };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.PATIENT)
  @Post()

  async create(
    @Req() req: any,
    @Body() body: { serviceType: ServiceType; preferredDate: string; preferredTime: string; notes?: string; intakeResponses?: any },
  ) {
    const data = await this.appointmentsService.create(req.user, body);
    return { success: true, data, message: 'Appointment booked successfully' };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.PATIENT)
  @Get('my')
  async getMyAppointments(@Req() req: any) {
    const data = await this.appointmentsService.getMyAppointments(req.user._id);
    return { success: true, data, message: 'My appointments retrieved' };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Get('summary')
  async getSummaryStats() {
    const data = await this.appointmentsService.getSummaryStats();
    return { success: true, data, message: 'Appointment statistics retrieved' };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Get()
  async findAll(
    @Query('status') status?: string,
    @Query('serviceType') serviceType?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('search') search?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    const data = await this.appointmentsService.findAll({ status, serviceType, startDate, endDate, search, page, limit });
    return { success: true, data, message: 'Appointments retrieved' };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req: any) {
    const data = await this.appointmentsService.findOne(id, req.user);
    return { success: true, data, message: 'Appointment details retrieved' };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Patch(':id/confirm')
  async confirm(@Param('id') id: string, @Body('adminNotes') adminNotes?: string) {
    const data = await this.appointmentsService.confirm(id, adminNotes);
    return { success: true, data, message: 'Appointment confirmed' };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.PATIENT)
  @Patch(':id/patient-reschedule')
  async patientReschedule(
    @Param('id') id: string,
    @Req() req: any,
    @Body() body: { newDate: string; newTime: string },
  ) {
    const data = await this.appointmentsService.patientReschedule(id, req.user, body);
    return { success: true, data, message: 'Appointment rescheduled successfully' };
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/cancel')
  async cancel(@Param('id') id: string, @Req() req: any, @Body('reason') reason?: string) {
    const result = await this.appointmentsService.cancel(id, req.user, reason);
    return {
      success: true,
      data: result.appointment,
      message: result.isLateCancel
        ? 'Appointment cancelled (marked as Late Cancellation)'
        : 'Appointment cancelled successfully',
    };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Patch(':id/reschedule')
  async reschedule(
    @Param('id') id: string,
    @Body() body: { rescheduledDate: string; rescheduledTime: string; adminNotes?: string },
  ) {
    const data = await this.appointmentsService.reschedule(id, body);
    return { success: true, data, message: 'Appointment rescheduled' };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Patch(':id/complete')
  async complete(@Param('id') id: string) {
    const data = await this.appointmentsService.complete(id);
    return { success: true, data, message: 'Appointment marked as completed' };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.appointmentsService.remove(id);
    return { success: true, data, message: data.message };
  }
}
