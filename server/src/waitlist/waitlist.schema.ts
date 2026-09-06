import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../users/user.schema';

export type WaitlistDocument = Waitlist & Document;

export enum WaitlistStatus {
  WAITING = 'waiting',
  NOTIFIED = 'notified',
  BOOKED = 'booked',
  EXPIRED = 'expired',
}

@Schema({ timestamps: true })
export class Waitlist {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  patientId: Types.ObjectId;

  @Prop({ required: true })
  patientName: string;

  @Prop({ required: true })
  patientEmail: string;

  @Prop({ required: true })
  patientPhone: string;

  @Prop({ required: true })
  service: string;

  @Prop({ required: true, type: Date })
  preferredDate: Date;

  @Prop({ type: Object, default: { start: '08:00', end: '17:00' } })
  preferredTimeRange: { start: string; end: string };

  @Prop({ required: true, enum: WaitlistStatus, default: WaitlistStatus.WAITING })
  status: WaitlistStatus;

  @Prop({ default: null, type: Date })
  notifiedAt: Date | null;
}

export const WaitlistSchema = SchemaFactory.createForClass(Waitlist);
