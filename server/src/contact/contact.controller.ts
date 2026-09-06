import { Controller, Post, Body, UsePipes, ValidationPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe({ transform: true }))
  async handleInquiry(@Body() dto: CreateContactDto) {
    const result = await this.contactService.sendContactInquiry(dto);
    return {
      success: true,
      message: result.message,
    };
  }
}
