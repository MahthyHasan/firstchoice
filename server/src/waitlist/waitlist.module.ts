import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Waitlist, WaitlistSchema } from './waitlist.schema';
import { WaitlistService } from './waitlist.service';
import { WaitlistController } from './waitlist.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Waitlist.name, schema: WaitlistSchema }])],
  providers: [WaitlistService],
  controllers: [WaitlistController],
  exports: [WaitlistService],
})
export class WaitlistModule {}
