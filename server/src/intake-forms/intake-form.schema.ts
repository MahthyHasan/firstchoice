import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IntakeFormDocument = IntakeForm & Document;

@Schema({ _id: false })
export class FormField {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  label: string;

  @Prop({ required: true, enum: ['text', 'number', 'select', 'checkbox', 'textarea'] })
  type: string;

  @Prop({ type: [String], default: [] })
  options: string[];

  @Prop({ default: false })
  required: boolean;
}

@Schema({ timestamps: true })
export class IntakeForm {
  @Prop({ required: true, unique: true })
  service: string; // 'home-nursing', 'elderly-care', 'postnatal-care', 'physiotherapy'

  @Prop({ type: [FormField], default: [] })
  fields: FormField[];
}

export const IntakeFormSchema = SchemaFactory.createForClass(IntakeForm);
