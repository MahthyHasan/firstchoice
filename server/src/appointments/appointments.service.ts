import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Appointment, AppointmentDocument, AppointmentStatus, ServiceType } from './appointment.schema';
import { User, UserDocument, UserRole } from '../users/user.schema';
import { StaffService } from '../staff/staff.service';
import { WaitlistService } from '../waitlist/waitlist.service';
import { EmailService } from '../notifications/email.service';

const RESCHEDULE_CUTOFF_HOURS = 24;
const LATE_CANCEL_THRESHOLD_HOURS = 12;

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectModel(Appointment.name) private appointmentModel: Model<AppointmentDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private staffService: StaffService,
    private waitlistService: WaitlistService,
    private emailService: EmailService,
  ) {}

  private generateAllSlots(): string[] {
    const slots: string[] = [];
    for (let hour = 8; hour < 17; hour++) {
      const hStr = hour.toString().padStart(2, '0');
      slots.push(`${hStr}:00`);
      slots.push(`${hStr}:30`);
    }
    return slots;
  }

  async getAvailability(dateStr: string, service: ServiceType = ServiceType.HOME_NURSING) {
    if (!dateStr) {
      throw new BadRequestException('Date is required (YYYY-MM-DD)');
    }

    const dateObj = new Date(dateStr);
    const dayOfWeek = dateObj.getDay();

    const activeStaff = await this.staffService.findActiveByServiceAndDay(service, dayOfWeek);
    const staffCapacity = activeStaff.length > 0 ? activeStaff.length : 3;

    const startOfDay = new Date(dateStr);
    startOfDay.setUTCHours(0, 0, 0, 0);

    const endOfDay = new Date(dateStr);
    endOfDay.setUTCHours(23, 59, 59, 999);

    const existingAppointments = await this.appointmentModel.find({
      serviceType: service,
      status: { $in: [AppointmentStatus.PENDING, AppointmentStatus.CONFIRMED] },
      $or: [
        { preferredDate: { $gte: startOfDay, $lte: endOfDay } },
        { rescheduledDate: { $gte: startOfDay, $lte: endOfDay } },
      ],
    }).exec();

    const bookingCounts: Record<string, number> = {};
    existingAppointments.forEach((app) => {
      const time = app.rescheduledTime || app.preferredTime;
      if (time) {
        bookingCounts[time] = (bookingCounts[time] || 0) + 1;
      }
    });

    const allTimeSlots = this.generateAllSlots();
    const slots = allTimeSlots.map((time) => {
      const booked = bookingCounts[time] || 0;
      const available = booked < staffCapacity;
      return {
        time,
        available,
        capacity: staffCapacity,
        booked,
      };
    });

    const availableSlots = slots.filter((s) => s.available).map((s) => s.time);
    const bookedSlots = slots.filter((s) => !s.available).map((s) => s.time);

    return {
      date: dateStr,
      service,
      totalStaffAvailable: staffCapacity,
      slots,
      availableSlots,
      bookedSlots,
    };
  }

  async create(user: UserDocument, dto: { serviceType: ServiceType; preferredDate: string; preferredTime: string; notes?: string; intakeResponses?: any }) {
    const patientUser = await this.userModel.findById(user._id).exec();
    if (patientUser?.bookingRestricted) {
      throw new ForbiddenException('Your account is restricted from creating new bookings due to multiple late cancellations or no-shows. Please contact support.');
    }

    const prefDate = new Date(dto.preferredDate);
    if (isNaN(prefDate.getTime())) {
      throw new BadRequestException('Invalid preferred date');
    }

    const dayOfWeek = prefDate.getDay();
    const activeStaff = await this.staffService.findActiveByServiceAndDay(dto.serviceType, dayOfWeek);

    let assignedStaffId: Types.ObjectId | null = null;
    if (activeStaff.length > 0) {
      const startOfDay = new Date(dto.preferredDate);
      startOfDay.setUTCHours(0, 0, 0, 0);
      const endOfDay = new Date(dto.preferredDate);
      endOfDay.setUTCHours(23, 59, 59, 999);

      let lowestCount = Infinity;
      for (const staff of activeStaff) {
        const count = await this.appointmentModel.countDocuments({
          staffId: staff._id,
          preferredDate: { $gte: startOfDay, $lte: endOfDay },
          preferredTime: dto.preferredTime,
          status: { $in: [AppointmentStatus.PENDING, AppointmentStatus.CONFIRMED] },
        }).exec();

        if (count < lowestCount) {
          lowestCount = count;
          assignedStaffId = staff._id as Types.ObjectId;
        }
      }
    }

    const appointment = new this.appointmentModel({
      patientId: user._id,
      patientName: user.fullName,
      patientEmail: user.email,
      patientPhone: user.phone,
      staffId: assignedStaffId,
      serviceType: dto.serviceType,
      preferredDate: prefDate,
      preferredTime: dto.preferredTime,
      notes: dto.notes || '',
      intakeResponses: dto.intakeResponses || {},
      status: AppointmentStatus.PENDING,
    });

    await appointment.save();

    // Trigger Email Notification
    if (appointment.patientEmail) {
      await this.emailService.sendBookingConfirmation(appointment.patientEmail, appointment);
    }

    return appointment;
  }

  async createPublic(dto: {
    patientName: string;
    patientEmail: string;
    patientPhone: string;
    serviceType: ServiceType;
    preferredDate: string;
    preferredTime?: string;
    location?: string;
    notes?: string;
  }) {
    const prefDate = new Date(dto.preferredDate);
    if (isNaN(prefDate.getTime())) {
      throw new BadRequestException('Invalid preferred date');
    }

    const time = dto.preferredTime || '09:00';
    const dayOfWeek = prefDate.getDay();
    const activeStaff = await this.staffService.findActiveByServiceAndDay(dto.serviceType, dayOfWeek);

    let assignedStaffId: Types.ObjectId | null = null;
    if (activeStaff.length > 0) {
      const startOfDay = new Date(dto.preferredDate);
      startOfDay.setUTCHours(0, 0, 0, 0);
      const endOfDay = new Date(dto.preferredDate);
      endOfDay.setUTCHours(23, 59, 59, 999);

      let lowestCount = Infinity;
      for (const staff of activeStaff) {
        const count = await this.appointmentModel.countDocuments({
          staffId: staff._id,
          preferredDate: { $gte: startOfDay, $lte: endOfDay },
          preferredTime: time,
          status: { $in: [AppointmentStatus.PENDING, AppointmentStatus.CONFIRMED] },
        }).exec();

        if (count < lowestCount) {
          lowestCount = count;
          assignedStaffId = staff._id as Types.ObjectId;
        }
      }
    }

    const existingUser = await this.userModel.findOne({ email: dto.patientEmail }).exec();

    const appointment = new this.appointmentModel({
      patientId: existingUser ? existingUser._id : new Types.ObjectId(),
      patientName: dto.patientName,
      patientEmail: dto.patientEmail,
      patientPhone: dto.patientPhone,
      staffId: assignedStaffId,
      serviceType: dto.serviceType,
      preferredDate: prefDate,
      preferredTime: time,
      notes: [dto.location ? `Location: ${dto.location}` : '', dto.notes || ''].filter(Boolean).join(' | '),
      status: AppointmentStatus.PENDING,
    });

    await appointment.save();

    // Trigger Email Notification
    if (appointment.patientEmail) {
      await this.emailService.sendBookingConfirmation(appointment.patientEmail, appointment);
    }

    return appointment;
  }

  async getMyAppointments(userId: string) {
    return this.appointmentModel
      .find({ patientId: new Types.ObjectId(userId) })
      .populate('staffId', 'name')
      .sort({ createdAt: -1 })
      .exec();
  }

  async findAll(query: { status?: string; serviceType?: string; startDate?: string; endDate?: string; search?: string; page?: number; limit?: number }) {
    const filter: any = {};

    if (query.status) filter.status = query.status;
    if (query.serviceType) filter.serviceType = query.serviceType;
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
    const limit = Math.max(1, Number(query.limit) || 50);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.appointmentModel
        .find(filter)
        .populate('staffId', 'name')
        .sort({ preferredDate: -1, createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .exec(),
      this.appointmentModel.countDocuments(filter).exec(),
    ]);

    return { items, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findOne(id: string, user: UserDocument) {
    const appointment = await this.appointmentModel.findById(id).populate('staffId', 'name').exec();
    if (!appointment) throw new NotFoundException('Appointment not found');

    if (user.role !== UserRole.ADMIN && appointment.patientId.toString() !== user._id.toString()) {
      throw new ForbiddenException('Access denied');
    }
    return appointment;
  }

  async confirm(id: string, adminNotes?: string) {
    const appointment = await this.appointmentModel.findById(id).exec();
    if (!appointment) throw new NotFoundException('Appointment not found');

    appointment.status = AppointmentStatus.CONFIRMED;
    if (adminNotes !== undefined) appointment.adminNotes = adminNotes;
    appointment.emailSentAt = new Date();
    await appointment.save();

    if (appointment.patientEmail) {
      await this.emailService.sendBookingStatusUpdate(appointment.patientEmail, appointment, adminNotes);
    }

    return appointment;
  }

  async patientReschedule(id: string, user: UserDocument, dto: { newDate: string; newTime: string }) {
    const appointment = await this.appointmentModel.findById(id).exec();
    if (!appointment) throw new NotFoundException('Appointment not found');
    if (appointment.patientId.toString() !== user._id.toString()) throw new ForbiddenException('Access denied');

    if (appointment.status !== AppointmentStatus.PENDING && appointment.status !== AppointmentStatus.CONFIRMED) {
      throw new BadRequestException('Only pending or confirmed appointments can be rescheduled');
    }

    const currentApptTime = new Date(appointment.rescheduledDate || appointment.preferredDate).getTime();
    const hoursDifference = (currentApptTime - Date.now()) / (1000 * 60 * 60);

    if (hoursDifference < RESCHEDULE_CUTOFF_HOURS) {
      throw new BadRequestException(`Rescheduling is only allowed at least ${RESCHEDULE_CUTOFF_HOURS} hours prior to appointment time.`);
    }

    const avail = await this.getAvailability(dto.newDate, appointment.serviceType);
    if (!avail.availableSlots.includes(dto.newTime)) {
      throw new BadRequestException('Selected date/time slot is fully booked');
    }

    appointment.rescheduleHistory.push({
      fromDate: appointment.rescheduledDate || appointment.preferredDate,
      fromTime: appointment.rescheduledTime || appointment.preferredTime,
      toDate: new Date(dto.newDate),
      toTime: dto.newTime,
      changedAt: new Date(),
    });

    appointment.rescheduledDate = new Date(dto.newDate);
    appointment.rescheduledTime = dto.newTime;
    appointment.status = AppointmentStatus.CONFIRMED;
    await appointment.save();

    if (appointment.patientEmail) {
      await this.emailService.sendBookingStatusUpdate(appointment.patientEmail, appointment);
    }

    return appointment;
  }

  async cancel(id: string, user: UserDocument, reason?: string) {
    const appointment = await this.appointmentModel.findById(id).exec();
    if (!appointment) throw new NotFoundException('Appointment not found');

    if (user.role !== UserRole.ADMIN && appointment.patientId.toString() !== user._id.toString()) {
      throw new ForbiddenException('Access denied');
    }

    const apptTime = new Date(appointment.rescheduledDate || appointment.preferredDate).getTime();
    const hoursDiff = (apptTime - Date.now()) / (1000 * 60 * 60);

    let isLateCancel = false;
    if (user.role === UserRole.PATIENT && hoursDiff < LATE_CANCEL_THRESHOLD_HOURS) {
      isLateCancel = true;
      appointment.lateCancellation = true;

      const patient = await this.userModel.findById(appointment.patientId).exec();
      if (patient) {
        patient.lateCancelCount = (patient.lateCancelCount || 0) + 1;
        if (patient.lateCancelCount + patient.noShowCount >= 3) {
          patient.bookingRestricted = true;
        }
        await patient.save();
      }
    }

    appointment.status = AppointmentStatus.CANCELLED;
    if (reason) appointment.adminNotes = reason;
    await appointment.save();

    if (appointment.patientEmail) {
      await this.emailService.sendBookingStatusUpdate(appointment.patientEmail, appointment, reason);
    }

    await this.waitlistService.notifyNextInLine(
      appointment.serviceType,
      appointment.rescheduledDate || appointment.preferredDate,
    );

    return { appointment, isLateCancel };
  }

  async reschedule(id: string, dto: { rescheduledDate: string; rescheduledTime: string; adminNotes?: string }) {
    const appointment = await this.appointmentModel.findById(id).exec();
    if (!appointment) throw new NotFoundException('Appointment not found');

    appointment.rescheduleHistory.push({
      fromDate: appointment.rescheduledDate || appointment.preferredDate,
      fromTime: appointment.rescheduledTime || appointment.preferredTime,
      toDate: new Date(dto.rescheduledDate),
      toTime: dto.rescheduledTime,
      changedAt: new Date(),
    });

    appointment.rescheduledDate = new Date(dto.rescheduledDate);
    appointment.rescheduledTime = dto.rescheduledTime;
    appointment.status = AppointmentStatus.CONFIRMED;
    if (dto.adminNotes !== undefined) appointment.adminNotes = dto.adminNotes;
    await appointment.save();

    if (appointment.patientEmail) {
      await this.emailService.sendBookingStatusUpdate(appointment.patientEmail, appointment, dto.adminNotes);
    }

    return appointment;
  }

  async complete(id: string) {
    const appointment = await this.appointmentModel.findById(id).exec();
    if (!appointment) throw new NotFoundException('Appointment not found');

    appointment.status = AppointmentStatus.COMPLETED;
    await appointment.save();

    if (appointment.patientEmail) {
      await this.emailService.sendBookingStatusUpdate(appointment.patientEmail, appointment);
    }

    return appointment;
  }

  async remove(id: string) {
    const appointment = await this.appointmentModel.findByIdAndDelete(id).exec();
    if (!appointment) throw new NotFoundException('Appointment not found');
    return { message: 'Appointment deleted successfully' };
  }

  async getStats() {
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);

    const [thisMonth, pending, confirmedToday, completedThisMonth] = await Promise.all([
      this.appointmentModel.countDocuments({ createdAt: { $gte: firstDayOfMonth } }).exec(),
      this.appointmentModel.countDocuments({ status: AppointmentStatus.PENDING }).exec(),
      this.appointmentModel.countDocuments({
        status: AppointmentStatus.CONFIRMED,
        $or: [
          { preferredDate: { $gte: startOfToday, $lte: endOfToday } },
          { rescheduledDate: { $gte: startOfToday, $lte: endOfToday } },
        ],
      }).exec(),
      this.appointmentModel.countDocuments({
        status: AppointmentStatus.COMPLETED,
        updatedAt: { $gte: firstDayOfMonth },
      }).exec(),
    ]);

    return {
      thisMonth,
      pending,
      confirmedToday,
      completedThisMonth,
    };
  }

  async getSummaryStats() {
    const stats = await this.getStats();
    const totalAppointments = await this.appointmentModel.countDocuments().exec();
    const pendingCount = await this.appointmentModel.countDocuments({ status: AppointmentStatus.PENDING }).exec();
    const confirmedCount = await this.appointmentModel.countDocuments({ status: AppointmentStatus.CONFIRMED }).exec();
    const completedCount = await this.appointmentModel.countDocuments({ status: AppointmentStatus.COMPLETED }).exec();
    const cancelledCount = await this.appointmentModel.countDocuments({ status: AppointmentStatus.CANCELLED }).exec();
    const lateCancelCount = await this.appointmentModel.countDocuments({ lateCancellation: true }).exec();

    const byServiceRaw = await this.appointmentModel.aggregate([
      { $group: { _id: '$serviceType', count: { $sum: 1 } } },
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
      ...stats,
      total: totalAppointments,
      pending: pendingCount,
      confirmed: confirmedCount,
      completed: completedCount,
      cancelled: cancelledCount,
      lateCancellations: lateCancelCount,
      byService,
    };
  }

  // Returns array of { dayOfWeek: 0..6, timeSlot: "09:00", count: N }
  async getHeatmapData() {
    const appointments = await this.appointmentModel.find({ status: { $ne: AppointmentStatus.CANCELLED } }).exec();
    const countsMap: Record<string, number> = {};

    const timeSlots = this.generateAllSlots();

    appointments.forEach((app) => {
      const date = new Date(app.rescheduledDate || app.preferredDate);
      const dayOfWeek = date.getDay(); // 0=Sun..6=Sat
      const rawTime = app.rescheduledTime || app.preferredTime || '09:00';
      const key = `${dayOfWeek}_${rawTime}`;
      countsMap[key] = (countsMap[key] || 0) + 1;
    });

    const result: Array<{ dayOfWeek: number; timeSlot: string; count: number }> = [];

    for (let day = 0; day < 7; day++) {
      for (const slot of timeSlots) {
        const key = `${day}_${slot}`;
        result.push({
          dayOfWeek: day,
          timeSlot: slot,
          count: countsMap[key] || 0,
        });
      }
    }

    return result;
  }

  async exportCsv(): Promise<string> {
    const appointments = await this.appointmentModel
      .find()
      .populate('staffId', 'name')
      .sort({ createdAt: -1 })
      .exec();

    const headers = [
      'Appointment ID',
      'Patient Name',
      'Patient Email',
      'Patient Phone',
      'Service Type',
      'Date',
      'Time Slot',
      'Status',
      'Assigned Staff',
      'Notes',
      'Created At',
    ];

    const rows = appointments.map((app) => [
      `"${app._id}"`,
      `"${(app.patientName || '').replace(/"/g, '""')}"`,
      `"${(app.patientEmail || '').replace(/"/g, '""')}"`,
      `"${(app.patientPhone || '').replace(/"/g, '""')}"`,
      `"${app.serviceType}"`,
      `"${new Date(app.rescheduledDate || app.preferredDate).toLocaleDateString()}"`,
      `"${app.rescheduledTime || app.preferredTime}"`,
      `"${app.status}"`,
      `"${(app.staffId as any)?.name || 'Unassigned'}"`,
      `"${(app.notes || '').replace(/"/g, '""')}"`,
      `"${new Date((app as any).createdAt || Date.now()).toISOString()}"`,
    ]);

    return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  }
}
