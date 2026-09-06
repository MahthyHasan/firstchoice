import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Waitlist, WaitlistDocument, WaitlistStatus } from './waitlist.schema';

@Injectable()
export class WaitlistService {
  constructor(@InjectModel(Waitlist.name) private waitlistModel: Model<WaitlistDocument>) {}

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

  async remove(id: string, patientId?: string) {
    const query: any = { _id: id };
    if (patientId) query.patientId = patientId;
    const res = await this.waitlistModel.findOneAndDelete(query).exec();
    if (!res) throw new NotFoundException('Waitlist entry not found');
    return { message: 'Removed from waitlist' };
  }

  // Triggered when an appointment slot is cancelled
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

      console.log(`[WAITLIST_NOTIFY] Alert sent to ${waitingEntry.patientEmail} for slot on ${date.toISOString().split('T')[0]}`);
      return waitingEntry;
    }
    return null;
  }

  // Cron task checking for notifications > 2 hours old
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
      // Offer to next person in line
      await this.notifyNextInLine(entry.service, entry.preferredDate);
    }
  }
}
