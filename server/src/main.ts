import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // پیکربندی Swagger برای OpenAPI
  const config = new DocumentBuilder()
    .setTitle('Online course API ')
    .setDescription('API Documentation for My Application')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // دسترسی به Swagger UI در /api

  await app.listen(process.env.PORT);
}
bootstrap();
