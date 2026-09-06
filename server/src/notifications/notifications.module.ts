import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { EmailService } from './email.service';
import { NotificationsService } from './notifications.service';
import { ReminderSchedulerService } from './reminder-scheduler.service';
import { Appointment, AppointmentSchema } from '../appointments/appointment.schema';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MongooseModule.forFeature([{ name: Appointment.name, schema: AppointmentSchema }]),
  ],
  providers: [EmailService, NotificationsService, ReminderSchedulerService],
  exports: [EmailService, NotificationsService],
})
export class NotificationsModule {}
