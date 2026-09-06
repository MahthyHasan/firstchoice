import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './contact.dto';
import { EmailService } from '../notifications/email.service';

@Injectable()
export class ContactService {
  constructor(private emailService: EmailService) {}

  async sendContactInquiry(dto: CreateContactDto) {
    await this.emailService.sendContactInquiry(dto);
    return {
      message: 'Your message has been sent. We will respond within 24 hours.',
    };
  }
}
