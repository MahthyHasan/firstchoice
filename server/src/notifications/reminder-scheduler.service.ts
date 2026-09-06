import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointment, AppointmentDocument, AppointmentStatus } from '../appointments/appointment.schema';
import { NotificationsService } from './notifications.service';

@Injectable()
export class ReminderSchedulerService {
  private readonly logger = new Logger(ReminderSchedulerService.name);

  constructor(
    @InjectModel(Appointment.name) private appointmentModel: Model<AppointmentDocument>,
    private notificationsService: NotificationsService,
  ) {}

  @Cron(CronExpression.EVERY_HOUR)
  async handleHourlyReminders() {
    const now = new Date();
    const next25h = new Date(now.getTime() + 25 * 60 * 60 * 1000);
    const next24h = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const next2h = new Date(now.getTime() + 2 * 60 * 60 * 1000);
    const next1h = new Date(now.getTime() + 1 * 60 * 60 * 1000);

    // 1. 24-Hour Reminders
    const appts24h = await this.appointmentModel.find({
      status: AppointmentStatus.CONFIRMED,
      reminder24hSent: { $ne: true },
      preferredDate: { $gte: next24h, $lte: next25h },
    }).exec();

    for (const app of appts24h) {
      await this.notificationsService.sendEmailReminder(app, 24);
      await this.notificationsService.sendSMSReminder(app, 24);
      app.reminder24hSent = true;
      await app.save();
    }

    // 2. 1-Hour Reminders
    const appts1h = await this.appointmentModel.find({
      status: AppointmentStatus.CONFIRMED,
      reminder1hSent: { $ne: true },
      preferredDate: { $gte: next1h, $lte: next2h },
    }).exec();

    for (const app of appts1h) {
      await this.notificationsService.sendEmailReminder(app, 1);
      await this.notificationsService.sendSMSReminder(app, 1);
      app.reminder1hSent = true;
      await app.save();
    }
  }
}
