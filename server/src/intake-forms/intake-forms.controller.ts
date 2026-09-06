import { Controller, Get, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { IntakeFormsService } from './intake-forms.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '../users/user.schema';

@Controller('intake-forms')
export class IntakeFormsController {
  constructor(private intakeFormsService: IntakeFormsService) {}

  @Get(':service')
  async getForm(@Param('service') service: string) {
    const data = await this.intakeFormsService.findByService(service);
    return { success: true, data, message: 'Intake form schema retrieved' };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Patch(':service')
  async updateForm(@Param('service') service: string, @Body('fields') fields: any[]) {
    const data = await this.intakeFormsService.updateForm(service, fields);
    return { success: true, data, message: 'Intake form schema updated' };
  }
}
