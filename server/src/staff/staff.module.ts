import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Staff, StaffSchema } from './staff.schema';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Staff.name, schema: StaffSchema }])],
  providers: [StaffService],
  controllers: [StaffController],
  exports: [StaffService],
})
export class StaffModule implements OnModuleInit {
  constructor(private staffService: StaffService) {}

  async onModuleInit() {
    await this.staffService.seedInitialStaff();
  }
}
