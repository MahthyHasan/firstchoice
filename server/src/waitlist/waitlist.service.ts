import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Waitlist, WaitlistDocument, WaitlistStatus } from './waitlist.schema';
import { Appointment, AppointmentDocument, AppointmentStatus, ServiceType } from '../appointments/appointment.schema';

@Injectable()
export class WaitlistService {
  constructor(
    @InjectModel(Waitlist.name) private waitlistModel: Model<WaitlistDocument>,
    @InjectModel(Appointment.name) private appointmentModel: Model<AppointmentDocument>,
  ) {}

  async create(user: any, body: { service: string; preferredDate: string; preferredTimeRange?: { start: string; end: string } }) {
    const newEntry = new this.waitlistModel({
      patientId: user._id,
      patientName: user.fullName,
      patientEmail: user.email,
      patientPhone: user.phone,
      service: body.service,
      preferredDate: new Date(body.preferredDate),
      preferredTimeRange: body.preferredTimeRange || { start: '08:00', end: '17:00' },
      status: WaitlistStatus.WAITING,
    });
    return newEntry.save();
  }

  async getMyWaitlist(patientId: string) {
    return this.waitlistModel.find({ patientId }).sort({ createdAt: -1 }).exec();
  }

  async getAllWaitlist() {
    return this.waitlistModel.find().sort({ createdAt: -1 }).exec();
  }

  async promoteToBooking(id: string) {
    const entry = await this.waitlistModel.findById(id).exec();
    if (!entry) {
      throw new NotFoundException('Waitlist entry not found');
    }

    // Determine service type enum
    let serviceEnum = ServiceType.HOME_NURSING;
    if (Object.values(ServiceType).includes(entry.service as ServiceType)) {
      serviceEnum = entry.service as ServiceType;
    }

    const newAppointment = new this.appointmentModel({
      patientId: entry.patientId || new Types.ObjectId(),
      patientName: entry.patientName,
      patientEmail: entry.patientEmail,
      patientPhone: entry.patientPhone,
      serviceType: serviceEnum,
      preferredDate: entry.preferredDate || new Date(),
      preferredTime: entry.preferredTimeRange?.start || '09:00',
      status: AppointmentStatus.PENDING,
      notes: 'Promoted from Waitlist',
    });

    await newAppointment.save();
    entry.status = WaitlistStatus.EXPIRED;
    await entry.save();

    return newAppointment;
  }

  async remove(id: string, patientId?: string) {
    const query: any = { _id: id };
    if (patientId) query.patientId = patientId;
    const res = await this.waitlistModel.findOneAndDelete(query).exec();
    if (!res) throw new NotFoundException('Waitlist entry not found');
    return { message: 'Removed from waitlist' };
  }

  async notifyNextInLine(service: string, date: Date) {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const waitingEntry = await this.waitlistModel
      .findOne({
        service,
        preferredDate: { $gte: startOfDay, $lte: endOfDay },
        status: WaitlistStatus.WAITING,
      })
      .sort({ createdAt: 1 })
      .exec();

    if (waitingEntry) {
      waitingEntry.status = WaitlistStatus.NOTIFIED;
      waitingEntry.notifiedAt = new Date();
      await waitingEntry.save();
      return waitingEntry;
    }
    return null;
  }

  @Cron(CronExpression.EVERY_30_MINUTES)
  async handleExpiredNotifications() {
    const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000);
    const expiredEntries = await this.waitlistModel
      .find({
        status: WaitlistStatus.NOTIFIED,
        notifiedAt: { $lte: twoHoursAgo },
      })
      .exec();

    for (const entry of expiredEntries) {
      entry.status = WaitlistStatus.EXPIRED;
      await entry.save();
      await this.notifyNextInLine(entry.service, entry.preferredDate);
    }
  }
}
