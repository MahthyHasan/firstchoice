import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../users/user.schema';
import { Staff } from '../staff/staff.schema';

export type AppointmentDocument = Appointment & Document;

export enum ServiceType {
  HOME_NURSING = 'home-nursing',
  ELDERLY_CARE = 'elderly-care',
  POSTNATAL_CARE = 'postnatal-care',
  PHYSIOTHERAPY = 'physiotherapy',
}

export enum AppointmentStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Schema({ timestamps: true })
export class Appointment {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  patientId: Types.ObjectId;

  @Prop({ required: true })
  patientName: string;

  @Prop({ required: true })
  patientEmail: string;

  @Prop({ required: true })
  patientPhone: string;

  @Prop({ type: Types.ObjectId, ref: 'Staff', default: null })
  staffId: Types.ObjectId | null;

  @Prop({ required: true, enum: ServiceType })
  serviceType: ServiceType;

  @Prop({ required: true, type: Date })
  preferredDate: Date;

  @Prop({ required: true })
  preferredTime: string;

  @Prop({ default: '' })
  notes: string;

  @Prop({ type: Object, default: {} })
  intakeResponses: Record<string, any>;

  @Prop({ required: true, enum: AppointmentStatus, default: AppointmentStatus.PENDING })
  status: AppointmentStatus;

  @Prop({ default: '' })
  adminNotes: string;

  @Prop({ default: null, type: Date })
  rescheduledDate: Date | null;

  @Prop({ default: null })
  rescheduledTime: string | null;

  @Prop({ type: [Object], default: [] })
  rescheduleHistory: Array<{ fromDate: Date; fromTime: string; toDate: Date; toTime: string; changedAt: Date }>;

  @Prop({ default: false })
  lateCancellation: boolean;

  @Prop({ default: false })
  reminder24hSent: boolean;

  @Prop({ default: false })
  reminder1hSent: boolean;

  @Prop({ default: null, type: Date })
  emailSentAt: Date | null;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
