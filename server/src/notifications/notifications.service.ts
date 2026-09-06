import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';
import twilio from 'twilio';

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);
  private resend: Resend | null = null;
  private twilioClient: any = null;

  constructor(private configService: ConfigService) {
    const resendKey = this.configService.get<string>('RESEND_API_KEY');
    if (resendKey) {
      this.resend = new Resend(resendKey);
    }

    const accountSid = this.configService.get<string>('TWILIO_ACCOUNT_SID');
    const authToken = this.configService.get<string>('TWILIO_AUTH_TOKEN');
    if (accountSid && authToken) {
      this.twilioClient = (twilio as any)(accountSid, authToken);
    }
  }

  async sendEmailReminder(appointment: any, hoursUntil: number) {
    const dateStr = new Date(appointment.rescheduledDate || appointment.preferredDate).toLocaleDateString();
    const timeStr = appointment.rescheduledTime || appointment.preferredTime;
    const subject = `Reminder: First Choice Appointment in ${hoursUntil} Hours`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #0D1B3E;">First Choice Medical Services</h2>
        <p>Dear ${appointment.patientName},</p>
        <p>This is a reminder for your upcoming <strong>${appointment.serviceType.replace('-', ' ')}</strong> appointment.</p>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; margin: 15px 0;">
          <p style="margin: 5px 0;"><strong>Date:</strong> ${dateStr}</p>
          <p style="margin: 5px 0;"><strong>Time:</strong> ${timeStr}</p>
        </div>
        <p>Thank you for choosing First Choice Medical Services.</p>
      </div>
    `;

    if (this.resend) {
      try {
        await this.resend.emails.send({
          from: 'First Choice <noreply@firstchoicemedical.qa>',
          to: appointment.patientEmail,
          subject,
          html,
        });
        this.logger.log(`Resend email dispatched to ${appointment.patientEmail}`);
      } catch (err) {
        this.logger.error(`Resend email failed: ${err.message}`);
      }
    } else {
      this.logger.log(`[SIMULATED EMAIL ${hoursUntil}h REMINDER] to ${appointment.patientEmail}: ${subject}`);
    }
  }

  async sendSMSReminder(appointment: any, hoursUntil: number) {
    const dateStr = new Date(appointment.rescheduledDate || appointment.preferredDate).toLocaleDateString();
    const timeStr = appointment.rescheduledTime || appointment.preferredTime;
    const body = `Reminder: Your ${appointment.serviceType} appointment with First Choice is in ${hoursUntil} hrs on ${dateStr} at ${timeStr}. Reply CANCEL to cancel.`;

    const fromPhone = this.configService.get<string>('TWILIO_FROM_NUMBER');
    if (this.twilioClient && fromPhone && appointment.patientPhone) {
      try {
        await this.twilioClient.messages.create({
          body,
          from: fromPhone,
          to: appointment.patientPhone,
        });
        this.logger.log(`Twilio SMS dispatched to ${appointment.patientPhone}`);
      } catch (err) {
        this.logger.error(`Twilio SMS failed: ${err.message}`);
      }
    } else {
      this.logger.log(`[SIMULATED SMS ${hoursUntil}h REMINDER] to ${appointment.patientPhone}: ${body}`);
    }
  }

  async sendBookingConfirmation(appointment: any) {
    this.logger.log(`[CONFIRMATION NOTICE] Booked appointment ${appointment._id} for ${appointment.patientEmail}`);
  }

  async sendCancellationNotice(appointment: any) {
    this.logger.log(`[CANCELLATION NOTICE] Cancelled appointment ${appointment._id} for ${appointment.patientEmail}`);
  }
}
