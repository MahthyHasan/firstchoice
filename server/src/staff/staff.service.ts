import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Staff, StaffDocument } from './staff.schema';

@Injectable()
export class StaffService {
  constructor(@InjectModel(Staff.name) private staffModel: Model<StaffDocument>) {}

  async findAll() {
    return this.staffModel.find().exec();
  }

  async findActiveByServiceAndDay(serviceType: string, dayOfWeek: number) {
    return this.staffModel.find({
      isActive: true,
      serviceTypes: serviceType,
      workingDays: dayOfWeek,
    }).exec();
  }

  async create(data: Partial<Staff>) {
    const newStaff = new this.staffModel(data);
    return newStaff.save();
  }

  async update(id: string, data: Partial<Staff>) {
    const updated = await this.staffModel.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!updated) throw new NotFoundException('Staff member not found');
    return updated;
  }

  async remove(id: string) {
    const res = await this.staffModel.findByIdAndDelete(id).exec();
    if (!res) throw new NotFoundException('Staff member not found');
    return { message: 'Staff member removed' };
  }

  async seedInitialStaff() {
    const count = await this.staffModel.countDocuments();
    if (count === 0) {
      await this.staffModel.insertMany([
        {
          name: 'Sarah Jenkins, RN',
          serviceTypes: ['home-nursing', 'elderly-care'],
          workingDays: [1, 2, 3, 4, 5],
          workingHours: { start: '08:00', end: '17:00' },
          isActive: true,
        },
        {
          name: 'Dr. Michael Chen',
          serviceTypes: ['physiotherapy'],
          workingDays: [1, 2, 3, 4, 5, 6],
          workingHours: { start: '09:00', end: '18:00' },
          isActive: true,
        },
        {
          name: 'Fatima Al-Kuwari',
          serviceTypes: ['postnatal-care', 'elderly-care'],
          workingDays: [0, 1, 2, 3, 4],
          workingHours: { start: '08:00', end: '16:00' },
          isActive: true,
        },
      ]);
    }
  }
}
