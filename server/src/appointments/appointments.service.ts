import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Appointment, AppointmentDocument, AppointmentStatus, ServiceType } from './appointment.schema';
import { UserDocument, UserRole } from '../users/user.schema';
import { EmailService } from '../notifications/email.service';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectModel(Appointment.name) private appointmentModel: Model<AppointmentDocument>,
    private emailService: EmailService,
  ) {}

  // Generate 30-min time slots between 08:00 and 17:00
  private generateAllSlots(): string[] {
    const slots: string[] = [];
    for (let hour = 8; hour < 17; hour++) {
      const hStr = hour.toString().padStart(2, '0');
      slots.push(`${hStr}:00`);
      slots.push(`${hStr}:30`);
    }
    return slots;
  }

  async getAvailability(dateStr: string, service?: ServiceType): Promise<{ availableSlots: string[]; bookedSlots: string[] }> {
    if (!dateStr) {
      throw new BadRequestException('Date is required (YYYY-MM-DD)');
    }

    const startOfDay = new Date(dateStr);
    startOfDay.setUTCHours(0, 0, 0, 0);

    const endOfDay = new Date(dateStr);
    endOfDay.setUTCHours(23, 59, 59, 999);

    const query: any = {
      status: { $in: [AppointmentStatus.PENDING, AppointmentStatus.CONFIRMED] },
      $or: [
        { preferredDate: { $gte: startOfDay, $lte: endOfDay } },
        { rescheduledDate: { $gte: startOfDay, $lte: endOfDay } },
      ],
    };

    if (service) {
      query.serviceType = service;
    }

    const existingAppointments = await this.appointmentModel.find(query).exec();

    const bookedSlotsSet = new Set<string>();
    existingAppointments.forEach((app) => {
      const time = app.rescheduledTime || app.preferredTime;
      if (time) bookedSlotsSet.add(time);
    });

    const allSlots = this.generateAllSlots();
    const availableSlots = allSlots.filter((slot) => !bookedSlotsSet.has(slot));

    return {
      availableSlots,
      bookedSlots: Array.from(bookedSlotsSet),
    };
  }

  async create(user: UserDocument, dto: { serviceType: ServiceType; preferredDate: string; preferredTime: string; notes?: string }) {
    const prefDate = new Date(dto.preferredDate);
    if (isNaN(prefDate.getTime())) {
      throw new BadRequestException('Invalid preferred date');
    }

    const appointment = new this.appointmentModel({
      patientId: user._id,
      patientName: user.fullName,
      patientEmail: user.email,
      patientPhone: user.phone,
      serviceType: dto.serviceType,
      preferredDate: prefDate,
      preferredTime: dto.preferredTime,
      notes: dto.notes || '',
      status: AppointmentStatus.PENDING,
    });

    await appointment.save();
    return appointment;
  }

  async getMyAppointments(userId: string) {
    return this.appointmentModel
      .find({ patientId: new Types.ObjectId(userId) })
      .sort({ createdAt: -1 })
      .exec();
  }

  async findAll(query: { status?: string; serviceType?: string; startDate?: string; endDate?: string; search?: string; page?: number; limit?: number }) {
    const filter: any = {};

    if (query.status) {
      filter.status = query.status;
    }
    if (query.serviceType) {
      filter.serviceType = query.serviceType;
    }
    if (query.startDate || query.endDate) {
      filter.preferredDate = {};
      if (query.startDate) filter.preferredDate.$gte = new Date(query.startDate);
      if (query.endDate) {
        const end = new Date(query.endDate);
        end.setUTCHours(23, 59, 59, 999);
        filter.preferredDate.$lte = end;
      }
    }
    if (query.search) {
      const searchRegex = new RegExp(query.search, 'i');
      filter.$or = [
        { patientName: searchRegex },
        { patientEmail: searchRegex },
        { patientPhone: searchRegex },
      ];
    }

    const page = Math.max(1, Number(query.page) || 1);
    const limit = Math.max(1, Number(query.limit) || 20);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.appointmentModel.find(filter).sort({ preferredDate: -1, createdAt: -1 }).skip(skip).limit(limit).exec(),
      this.appointmentModel.countDocuments(filter).exec(),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: string, user: UserDocument) {
    const appointment = await this.appointmentModel.findById(id).exec();
    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }

    if (user.role !== UserRole.ADMIN && appointment.patientId.toString() !== user._id.toString()) {
      throw new ForbiddenException('Access denied');
    }

    return appointment;
  }

  async confirm(id: string, adminNotes?: string) {
    const appointment = await this.appointmentModel.findById(id).exec();
    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }

    appointment.status = AppointmentStatus.CONFIRMED;
    if (adminNotes !== undefined) appointment.adminNotes = adminNotes;
    appointment.emailSentAt = new Date();
    await appointment.save();

    await this.emailService.sendAppointmentConfirmation(appointment.patientEmail, appointment);
    return appointment;
  }

  async cancel(id: string, user: UserDocument, reason?: string) {
    const appointment = await this.appointmentModel.findById(id).exec();
    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }

    if (user.role !== UserRole.ADMIN && appointment.patientId.toString() !== user._id.toString()) {
      throw new ForbiddenException('Access denied');
    }

    appointment.status = AppointmentStatus.CANCELLED;
    if (reason) appointment.adminNotes = reason;
    await appointment.save();

    await this.emailService.sendAppointmentCancellation(appointment.patientEmail, appointment, reason);
    return appointment;
  }

  async reschedule(id: string, dto: { rescheduledDate: string; rescheduledTime: string; adminNotes?: string }) {
    const appointment = await this.appointmentModel.findById(id).exec();
    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }

    appointment.rescheduledDate = new Date(dto.rescheduledDate);
    appointment.rescheduledTime = dto.rescheduledTime;
    if (dto.adminNotes !== undefined) appointment.adminNotes = dto.adminNotes;
    await appointment.save();

    await this.emailService.sendAppointmentReschedule(appointment.patientEmail, appointment);
    return appointment;
  }

  async complete(id: string) {
    const appointment = await this.appointmentModel.findById(id).exec();
    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }

    appointment.status = AppointmentStatus.COMPLETED;
    await appointment.save();
    return appointment;
  }

  async remove(id: string) {
    const appointment = await this.appointmentModel.findByIdAndDelete(id).exec();
    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }
    return { message: 'Appointment deleted successfully' };
  }

  async getSummaryStats() {
    const totalAppointments = await this.appointmentModel.countDocuments().exec();
    const pendingCount = await this.appointmentModel.countDocuments({ status: AppointmentStatus.PENDING }).exec();
    const confirmedCount = await this.appointmentModel.countDocuments({ status: AppointmentStatus.CONFIRMED }).exec();
    const completedCount = await this.appointmentModel.countDocuments({ status: AppointmentStatus.COMPLETED }).exec();
    const cancelledCount = await this.appointmentModel.countDocuments({ status: AppointmentStatus.CANCELLED }).exec();

    // Group by service type
    const byServiceRaw = await this.appointmentModel.aggregate([
      { $group: { _id: '$serviceType', count: { $sum: 1 } } }
    ]).exec();

    const byService = {
      'home-nursing': 0,
      'elderly-care': 0,
      'postnatal-care': 0,
      'physiotherapy': 0,
    };
    byServiceRaw.forEach((item) => {
      if (item._id && byService[item._id] !== undefined) {
        byService[item._id] = item.count;
      }
    });

    return {
      total: totalAppointments,
      pending: pendingCount,
      confirmed: confirmedCount,
      completed: completedCount,
      cancelled: cancelledCount,
      byService,
    };
  }
}
