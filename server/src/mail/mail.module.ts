import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as path from 'path';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        transport: {
          host: config.get('MAIL_HOST') || config.get('SMTP_HOST') || 'smtp.hostinger.com',
          port: +(config.get('MAIL_PORT') || config.get('SMTP_PORT') || 465),
          secure: (config.get('MAIL_SECURE') || 'true') === 'true',
          auth: {
            user: config.get('MAIL_USER') || config.get('SMTP_USER'),
            pass: config.get('MAIL_PASS') || config.get('SMTP_PASS'),
          },
        },
        defaults: {
          from: config.get('MAIL_FROM') || config.get('SMTP_FROM') || '"First Choice Medical" <contact@firstcmedical.com>',
        },
        template: {
          dir: path.join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: { strict: true },
        },
      }),
    }),
  ],
  exports: [MailerModule],
})
export class MailConfigModule {}
