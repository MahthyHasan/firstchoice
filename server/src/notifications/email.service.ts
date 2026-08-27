import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;
  private readonly logger = new Logger(EmailService.name);

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_HOST', 'smtp.gmail.com'),
      port: Number(this.configService.get<number>('SMTP_PORT', 587)),
      secure: false,
      auth: {
        user: this.configService.get<string>('SMTP_USER', 'agentfcn@gmail.com'),
        pass: this.configService.get<string>('SMTP_PASS', ''),
      },
    });
  }

  private getHeaderHtml(title: string): string {
    return `
      <div style="background-color: #0D1B3E; padding: 25px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px;">
        <h1 style="color: #4CAF50; margin: 0; font-size: 24px; font-family: Arial, sans-serif;">First Choice Medical Services</h1>
        <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 14px; font-style: italic; font-family: Arial, sans-serif;">"We Take Care Of You Always"</p>
        <h2 style="color: #ffffff; margin: 15px 0 0 0; font-size: 18px; font-family: Arial, sans-serif;">${title}</h2>
      </div>
    `;
  }

  private getFooterHtml(): string {
    return `
      <div style="background-color: #f4f6f9; padding: 20px; text-align: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top: 1px solid #e0e0e0; margin-top: 20px; font-family: Arial, sans-serif;">
        <p style="color: #0D1B3E; margin: 0; font-weight: bold; font-size: 14px;">First Choice Medical Services — Doha, Qatar</p>
        <p style="color: #666666; margin: 5px 0; font-size: 12px;">C-Ring Road, Umm Ghuwailina | Tel: +974 4140 2630 / +974 5000 2334</p>
        <p style="color: #888888; margin: 5px 0 0 0; font-size: 11px;">© ${new Date().getFullYear()} First Choice Medical. All rights reserved.</p>
      </div>
    `;
  }

  private async sendMail(to: string, subject: string, htmlContent: string) {
    const from = this.configService.get<string>('SMTP_FROM', '"First Choice Medical" <agentfcn@gmail.com>');
    try {
      await this.transporter.sendMail({
        from,
        to,
        subject,
        html: htmlContent,
      });
      this.logger.log(`Email sent successfully to ${to}: ${subject}`);
    } catch (error) {
      this.logger.warn(`Failed to send real email to ${to} (SMTP credentials may be unconfigured). Logging mail intent: ${subject}`, error?.message);
    }
  }

  async sendVerificationEmail(to: string, token: string) {
    const clientUrl = this.configService.get<string>('CLIENT_URL', 'http://localhost:5173');
    const verifyLink = `${clientUrl}/verify-email?token=${token}`;
    const html = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; border: 1px solid #e0e0e0; border-radius: 8px;">
        ${this.getHeaderHtml('Verify Your Email Address')}
        <div style="padding: 30px; color: #333333; line-height: 1.6;">
          <p>Hello,</p>
          <p>Thank you for creating an account with First Choice Medical Services. Please click the button below to verify your email address and activate your account:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verifyLink}" style="background-color: #4CAF50; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 5px; font-weight: bold; display: inline-block;">Verify Email Address</a>
          </div>
          <p style="font-size: 13px; color: #666666;">Or copy and paste this link in your browser:<br/><a href="${verifyLink}" style="color: #2E7D32;">${verifyLink}</a></p>
        </div>
        ${this.getFooterHtml()}
      </div>
    `;
    await this.sendMail(to, 'Verify Your First Choice Medical Account', html);
  }

  async sendWelcomeEmail(to: string, name: string) {
    const html = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; border: 1px solid #e0e0e0; border-radius: 8px;">
        ${this.getHeaderHtml('Welcome to First Choice Medical Services')}
        <div style="padding: 30px; color: #333333; line-height: 1.6;">
          <p>Dear ${name},</p>
          <p>Your email address has been successfully verified! Welcome to First Choice Medical Services.</p>
          <p>You can now log in to your patient dashboard to schedule home nursing, elderly care, postnatal care, and physiotherapy services across Qatar.</p>
        </div>
        ${this.getFooterHtml()}
      </div>
    `;
    await this.sendMail(to, 'Welcome to First Choice Medical Services', html);
  }

  async sendAppointmentConfirmation(to: string, appointment: any) {
    const html = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; border: 1px solid #e0e0e0; border-radius: 8px;">
        ${this.getHeaderHtml('Appointment Confirmed ✓')}
        <div style="padding: 30px; color: #333333; line-height: 1.6;">
          <p>Dear ${appointment.patientName},</p>
          <p>We are pleased to inform you that your appointment with <strong>First Choice Medical Services</strong> has been <strong>CONFIRMED</strong>.</p>
          <div style="background-color: #f4f6f9; padding: 20px; border-left: 4px solid #4CAF50; margin: 20px 0; border-radius: 4px;">
            <p style="margin: 5px 0;"><strong>Service:</strong> ${appointment.serviceType}</p>
            <p style="margin: 5px 0;"><strong>Date:</strong> ${new Date(appointment.preferredDate).toLocaleDateString()}</p>
            <p style="margin: 5px 0;"><strong>Time Slot:</strong> ${appointment.preferredTime}</p>
            <p style="margin: 5px 0;"><strong>Patient Phone:</strong> ${appointment.patientPhone}</p>
          </div>
          <p>Our home care medical team will reach out to you prior to the scheduled time.</p>
        </div>
        ${this.getFooterHtml()}
      </div>
    `;
    await this.sendMail(to, 'Your Appointment is Confirmed — First Choice Medical', html);
  }

  async sendAppointmentCancellation(to: string, appointment: any, reason?: string) {
    const html = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; border: 1px solid #e0e0e0; border-radius: 8px;">
        ${this.getHeaderHtml('Appointment Cancellation Notice')}
        <div style="padding: 30px; color: #333333; line-height: 1.6;">
          <p>Dear ${appointment.patientName},</p>
          <p>Your appointment for <strong>${appointment.serviceType}</strong> on <strong>${new Date(appointment.preferredDate).toLocaleDateString()}</strong> at <strong>${appointment.preferredTime}</strong> has been cancelled.</p>
          ${reason ? `<p><strong>Reason:</strong> ${reason}</p>` : ''}
          <p>If you would like to reschedule, please log into your dashboard or call us directly at +974 4140 2630.</p>
        </div>
        ${this.getFooterHtml()}
      </div>
    `;
    await this.sendMail(to, 'Appointment Cancellation — First Choice Medical', html);
  }

  async sendAppointmentReschedule(to: string, appointment: any) {
    const dateStr = appointment.rescheduledDate ? new Date(appointment.rescheduledDate).toLocaleDateString() : new Date(appointment.preferredDate).toLocaleDateString();
    const timeStr = appointment.rescheduledTime || appointment.preferredTime;
    const html = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; border: 1px solid #e0e0e0; border-radius: 8px;">
        ${this.getHeaderHtml('Appointment Rescheduled')}
        <div style="padding: 30px; color: #333333; line-height: 1.6;">
          <p>Dear ${appointment.patientName},</p>
          <p>Your appointment for <strong>${appointment.serviceType}</strong> has been rescheduled to a new time slot:</p>
          <div style="background-color: #f4f6f9; padding: 20px; border-left: 4px solid #0D1B3E; margin: 20px 0; border-radius: 4px;">
            <p style="margin: 5px 0;"><strong>New Date:</strong> ${dateStr}</p>
            <p style="margin: 5px 0;"><strong>New Time:</strong> ${timeStr}</p>
          </div>
          <p>Please contact us if you need to make any further adjustments.</p>
        </div>
        ${this.getFooterHtml()}
      </div>
    `;
    await this.sendMail(to, 'Your Appointment Has Been Rescheduled — First Choice Medical', html);
  }

  async sendPasswordReset(to: string, token: string) {
    const clientUrl = this.configService.get<string>('CLIENT_URL', 'http://localhost:5173');
    const resetLink = `${clientUrl}/reset-password?token=${token}`;
    const html = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; border: 1px solid #e0e0e0; border-radius: 8px;">
        ${this.getHeaderHtml('Reset Your Password')}
        <div style="padding: 30px; color: #333333; line-height: 1.6;">
          <p>Hello,</p>
          <p>You requested a password reset for your First Choice Medical account. Click the button below to reset your password. This link is valid for 1 hour:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetLink}" style="background-color: #0D1B3E; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 5px; font-weight: bold; display: inline-block;">Reset Password</a>
          </div>
          <p style="font-size: 13px; color: #666666;">Or copy and paste this link into your browser:<br/><a href="${resetLink}" style="color: #4CAF50;">${resetLink}</a></p>
        </div>
        ${this.getFooterHtml()}
      </div>
    `;
    await this.sendMail(to, 'Password Reset Request — First Choice Medical', html);
  }
}
