import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { AllExceptionsFilter } from './common/all-exceptions.filter';

let cachedServer: any;

async function bootstrapServer() {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule);
    
    app.setGlobalPrefix('api');
    app.useGlobalFilters(new AllExceptionsFilter());
    
    const parseCookie = (cookieParser as any).default || cookieParser;
    app.use(parseCookie());
    
    app.enableCors({
      origin: true,
      credentials: true,
    });

    await app.init();
    cachedServer = app.getHttpAdapter().getInstance();
  }
  return cachedServer;
}

export default async function handler(req: any, res: any) {
  const server = await bootstrapServer();
  return server(req, res);
}

module.exports = handler;
