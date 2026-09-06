import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IntakeForm, IntakeFormSchema } from './intake-form.schema';
import { IntakeFormsService } from './intake-forms.service';
import { IntakeFormsController } from './intake-forms.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: IntakeForm.name, schema: IntakeFormSchema }])],
  providers: [IntakeFormsService],
  controllers: [IntakeFormsController],
  exports: [IntakeFormsService],
})
export class IntakeFormsModule implements OnModuleInit {
  constructor(private intakeFormsService: IntakeFormsService) {}

  async onModuleInit() {
    await this.intakeFormsService.seedDefaultForms();
  }
}
