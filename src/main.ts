import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './infrastructure/Config/Exceptions/HttpExceptionFilter';
import * as rateLimit from 'express-rate-limit';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
  }));
  await app.listen(3000);
}
bootstrap();
