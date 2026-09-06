import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor(
    private mailerService: MailerService,
    private configService: ConfigService,
  ) {}

  private get appUrl(): string {
    return (
      this.configService.get<string>('APP_URL') ||
      this.configService.get<string>('CLIENT_URL') ||
      'https://www.firstcmedical.com'
    );
  }

  private get year(): number {
    return new Date().getFullYear();
  }

  async sendVerificationEmail(to: string, name: string, verificationUrl: string) {
    try {
      await this.mailerService.sendMail({
        to,
        subject: 'Verify your email address — First Choice Medical',
        template: 'verify-email',
        context: {
          name,
          verificationUrl,
          appUrl: this.appUrl,
          year: this.year,
        },
      });
      this.logger.log(`Verification email sent to ${to}`);
    } catch (err) {
      this.logger.warn(`Failed to send verification email to ${to}: ${err.message}`);
    }
  }

  async sendBookingConfirmation(to: string, appointment: any) {
    try {
      await this.mailerService.sendMail({
        to,
        subject: 'Booking request received — First Choice Medical',
        template: 'booking-confirmation',
        context: {
          patientName: appointment.patientName,
          serviceType: appointment.serviceType,
          preferredDate: new Date(appointment.preferredDate).toLocaleDateString(),
          preferredTime: appointment.preferredTime,
          appointmentId: appointment._id ? appointment._id.toString() : 'REQ-PENDING',
          appUrl: this.appUrl,
          year: this.year,
        },
      });
      this.logger.log(`Booking confirmation email sent to ${to}`);
    } catch (err) {
      this.logger.warn(`Failed to send booking confirmation email to ${to}: ${err.message}`);
    }
  }

  async sendBookingStatusUpdate(to: string, appointment: any, adminNotes?: string) {
    try {
      await this.mailerService.sendMail({
        to,
        subject: `Appointment Status Updated: ${appointment.status} — First Choice Medical`,
        template: 'booking-status-update',
        context: {
          patientName: appointment.patientName,
          status: appointment.status,
          serviceType: appointment.serviceType,
          preferredDate: appointment.rescheduledDate
            ? new Date(appointment.rescheduledDate).toLocaleDateString()
            : new Date(appointment.preferredDate).toLocaleDateString(),
          preferredTime: appointment.rescheduledTime || appointment.preferredTime,
          adminNotes: adminNotes || appointment.adminNotes || '',
          appUrl: this.appUrl,
          year: this.year,
        },
      });
      this.logger.log(`Status update email sent to ${to}`);
    } catch (err) {
      this.logger.warn(`Failed to send status update email to ${to}: ${err.message}`);
    }
  }

  async sendContactInquiry(dto: { name: string; email: string; phone?: string; message: string }) {
    try {
      const recipient = this.configService.get<string>('MAIL_USER', 'contact@firstcmedical.com');
      await this.mailerService.sendMail({
        to: recipient,
        replyTo: dto.email,
        subject: `New Inquiry from ${dto.name} — First Choice Medical`,
        template: 'contact-inquiry',
        context: {
          senderName: dto.name,
          senderEmail: dto.email,
          senderPhone: dto.phone || 'Not provided',
          message: dto.message,
          appUrl: this.appUrl,
          year: this.year,
        },
      });
      this.logger.log(`Contact inquiry email sent to ${recipient}`);
    } catch (err) {
      this.logger.warn(`Failed to send contact inquiry email: ${err.message}`);
    }
  }

  async sendPasswordReset(to: string, name: string, resetUrl: string) {
    try {
      await this.mailerService.sendMail({
        to,
        subject: 'Reset your password — First Choice Medical',
        template: 'forgot-password',
        context: {
          name,
          resetUrl,
          appUrl: this.appUrl,
          year: this.year,
        },
      });
      this.logger.log(`Password reset email sent to ${to}`);
    } catch (err) {
      this.logger.warn(`Failed to send password reset email to ${to}: ${err.message}`);
    }
  }

  async sendWelcomeEmail(to: string, name: string) {
    await this.sendVerificationEmail(to, name, `${this.appUrl}/login`);
  }

  async sendAppointmentConfirmation(to: string, appointment: any) {
    await this.sendBookingConfirmation(to, appointment);
  }

  async sendAppointmentCancellation(to: string, appointment: any, reason?: string) {
    await this.sendBookingStatusUpdate(to, { ...appointment, status: 'cancelled' }, reason);
  }

  async sendAppointmentReschedule(to: string, appointment: any) {
    await this.sendBookingStatusUpdate(to, { ...appointment, status: 'rescheduled' });
  }
}
