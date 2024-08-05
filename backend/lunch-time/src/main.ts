import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // تنظیمات Swagger
  const config = new DocumentBuilder()
    .setTitle('Lunch Time API')
    .setDescription('API for managing lunch orders')
    .setVersion('1.0')
    .addTag('orders') // اضافه کردن تگ برای گروه‌بندی APIها
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
