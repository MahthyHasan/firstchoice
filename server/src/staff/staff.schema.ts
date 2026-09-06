import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StaffDocument = Staff & Document;

@Schema({ _id: false })
export class WorkingHours {
  @Prop({ default: '08:00' })
  start: string;

  @Prop({ default: '17:00' })
  end: string;
}

@Schema({ timestamps: true })
export class Staff {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: [String] })
  serviceTypes: string[]; // ['home-nursing', 'elderly-care', 'postnatal-care', 'physiotherapy']

  @Prop({ required: true, type: [Number], default: [1, 2, 3, 4, 5] })
  workingDays: number[]; // 0=Sun, 1=Mon...6=Sat

  @Prop({ type: WorkingHours, default: () => ({ start: '08:00', end: '17:00' }) })
  workingHours: WorkingHours;

  @Prop({ default: 30 })
  slotDurationMinutes: number;

  @Prop({ default: true })
  isActive: boolean;
}

export const StaffSchema = SchemaFactory.createForClass(Staff);
