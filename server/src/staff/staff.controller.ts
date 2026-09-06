import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { StaffService } from './staff.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '../users/user.schema';

@Controller('staff')
export class StaffController {
  constructor(private staffService: StaffService) {}

  @Get()
  async findAll() {
    const data = await this.staffService.findAll();
    return { success: true, data, message: 'Staff roster retrieved' };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Post()
  async create(@Body() body: any) {
    const data = await this.staffService.create(body);
    return { success: true, data, message: 'Staff member added' };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const data = await this.staffService.update(id, body);
    return { success: true, data, message: 'Staff member updated' };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.staffService.remove(id);
    return { success: true, data, message: data.message };
  }
}
