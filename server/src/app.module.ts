import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { StaffModule } from './staff/staff.module';
import { WaitlistModule } from './waitlist/waitlist.module';
import { IntakeFormsModule } from './intake-forms/intake-forms.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI', 'mongodb://localhost:27017/firstchoice'),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    AppointmentsModule,
    StaffModule,
    WaitlistModule,
    IntakeFormsModule,
    NotificationsModule,
  ],
})
export class AppModule {}
