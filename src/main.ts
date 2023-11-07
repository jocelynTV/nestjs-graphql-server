import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'; // Add to line
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Add to line
  await app.listen(3000);
}
bootstrap();
