import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger конфигурация
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('Документация для API приложения')
    .setVersion('1.0')
    .addBearerAuth() // Добавление авторизации (если нужно)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document); // Путь, где доступен Swagger

  await app.listen(3000);
}

bootstrap();
