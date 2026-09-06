import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export enum UserRole {
  ADMIN = 'admin',
  PATIENT = 'patient',
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true, lowercase: true, index: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true, enum: UserRole, default: UserRole.PATIENT })
  role: UserRole;

  @Prop({ default: false })
  isEmailVerified: boolean;

  @Prop({ default: null })
  emailVerificationToken: string | null;

  @Prop({ default: null, type: Date })
  emailVerificationExpires: Date | null;

  @Prop({ default: null, type: Date })
  lastResendAt: Date | null;

  @Prop({ default: '' })
  address: string;

  @Prop({ default: false })
  isVerified: boolean;

  @Prop({ default: null })
  resetPasswordToken: string | null;

  @Prop({ default: null, type: Date })
  resetPasswordExpiry: Date | null;

  @Prop({ default: 0 })
  noShowCount: number;

  @Prop({ default: 0 })
  lateCancelCount: number;

  @Prop({ default: false })
  bookingRestricted: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
