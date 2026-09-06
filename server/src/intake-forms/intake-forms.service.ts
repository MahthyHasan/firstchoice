import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IntakeForm, IntakeFormDocument } from './intake-form.schema';

@Injectable()
export class IntakeFormsService {
  constructor(@InjectModel(IntakeForm.name) private intakeFormModel: Model<IntakeFormDocument>) {}

  async findByService(service: string) {
    const form = await this.intakeFormModel.findOne({ service }).exec();
    if (!form) {
      // Fallback default form if not seeded yet
      return { service, fields: [] };
    }
    return form;
  }

  async updateForm(service: string, fields: any[]) {
    const updated = await this.intakeFormModel.findOneAndUpdate(
      { service },
      { service, fields },
      { upsert: true, new: true },
    ).exec();
    return updated;
  }

  async seedDefaultForms() {
    const count = await this.intakeFormModel.countDocuments();
    if (count === 0) {
      await this.intakeFormModel.insertMany([
        {
          service: 'home-nursing',
          fields: [
            { id: 'mobilityLevel', label: 'Mobility Level', type: 'select', options: ['Bedridden', 'Assisted Walking', 'Independent'], required: true },
            { id: 'diagnoses', label: 'Primary Diagnosis / Medical Conditions', type: 'textarea', options: [], required: true },
            { id: 'equipmentNeeded', label: 'Special Medical Equipment Needed', type: 'text', options: [], required: false },
          ],
        },
        {
          service: 'elderly-care',
          fields: [
            { id: 'patientAge', label: 'Patient Age', type: 'number', options: [], required: true },
            { id: 'chronicConditions', label: 'Known Chronic Conditions (e.g. Diabetes, Hypertension)', type: 'textarea', options: [], required: true },
            { id: 'emergencyContact', label: 'Emergency Contact Person & Relationship', type: 'text', options: [], required: true },
          ],
        },
        {
          service: 'postnatal-care',
          fields: [
            { id: 'deliveryDate', label: 'Childbirth / Delivery Date', type: 'text', options: [], required: true },
            { id: 'deliveryType', label: 'Delivery Method', type: 'select', options: ['Vaginal', 'Cesarean (C-Section)'], required: true },
            { id: 'complications', label: 'Any Postpartum Complications', type: 'textarea', options: [], required: false },
          ],
        },
        {
          service: 'physiotherapy',
          fields: [
            { id: 'injuryArea', label: 'Target Area / Condition', type: 'text', options: [], required: true },
            { id: 'painScale', label: 'Current Pain Level (1 to 10)', type: 'select', options: ['1','2','3','4','5','6','7','8','9','10'], required: true },
            { id: 'previousTreatment', label: 'Previous Physical Therapy or Surgery Details', type: 'textarea', options: [], required: false },
          ],
        },
      ]);
    }
  }
}
