import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/all-exceptions.filter';

async function bootstrap() {
  if (process.env.VERCEL) {
    // Vercel serverless environment handles invocation via lambda.ts
    return;
  }

  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  app.setGlobalPrefix('api');
  app.useGlobalFilters(new AllExceptionsFilter());

  const parseCookie = (cookieParser as any).default || cookieParser;
  app.use(parseCookie());

  app.enableCors({
    origin: true,
    credentials: true,
  });

  const port = process.env.PORT || 3001;
  await app.listen(port);
  logger.log(`First Choice NestJS Backend running locally on port ${port} with prefix /api`);
}
bootstrap();
