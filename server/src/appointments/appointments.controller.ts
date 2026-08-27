import { Controller, Post, Get, Patch, Delete, Body, Param, Query, Req, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '../users/user.schema';
import { ServiceType } from './appointment.schema';

@Controller('appointments')
export class AppointmentsController {
  constructor(private appointmentsService: AppointmentsService) {}

  // Public endpoint to check availability
  @Get('availability')
  async getAvailability(
    @Query('date') date: string,
    @Query('service') service?: ServiceType,
  ) {
    const data = await this.appointmentsService.getAvailability(date, service);
    return { success: true, data, message: 'Available slots retrieved' };
  }

  // Patient creates appointment
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.PATIENT)
  @Post()
  async create(@Req() req: any, @Body() body: { serviceType: ServiceType; preferredDate: string; preferredTime: string; notes?: string }) {
    const data = await this.appointmentsService.create(req.user, body);
    return { success: true, data, message: 'Appointment booked successfully' };
  }

  // Patient views own appointments
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.PATIENT)
  @Get('my')
  async getMyAppointments(@Req() req: any) {
    const data = await this.appointmentsService.getMyAppointments(req.user._id);
    return { success: true, data, message: 'My appointments retrieved' };
  }

  // Admin gets stats & summary
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Get('summary')
  async getSummaryStats() {
    const data = await this.appointmentsService.getSummaryStats();
    return { success: true, data, message: 'Appointment statistics retrieved' };
  }

  // Admin gets all appointments with filters & pagination
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

  // Get single appointment
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req: any) {
    const data = await this.appointmentsService.findOne(id, req.user);
    return { success: true, data, message: 'Appointment details retrieved' };
  }

  // Admin confirms appointment
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Patch(':id/confirm')
  async confirm(@Param('id') id: string, @Body('adminNotes') adminNotes?: string) {
    const data = await this.appointmentsService.confirm(id, adminNotes);
    return { success: true, data, message: 'Appointment confirmed' };
  }

  // Admin or owning patient cancels appointment
  @UseGuards(JwtAuthGuard)
  @Patch(':id/cancel')
  async cancel(@Param('id') id: string, @Req() req: any, @Body('reason') reason?: string) {
    const data = await this.appointmentsService.cancel(id, req.user, reason);
    return { success: true, data, message: 'Appointment cancelled' };
  }

  // Admin reschedules appointment
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

  // Admin marks complete
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Patch(':id/complete')
  async complete(@Param('id') id: string) {
    const data = await this.appointmentsService.complete(id);
    return { success: true, data, message: 'Appointment marked as completed' };
  }

  // Admin deletes appointment
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.appointmentsService.remove(id);
    return { success: true, data, message: data.message };
  }
}
