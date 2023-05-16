import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config({ path: '.env' });

  //prevents null inputs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.get(ConfigService);

  await app.listen(3000);
}
bootstrap();
