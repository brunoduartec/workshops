import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita o ValidationPipe globalmente
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove propriedades não declaradas no DTO
      forbidNonWhitelisted: true, // Retorna erro para propriedades não declaradas
      transform: true, // Transforma os dados para o tipo esperado no DTO
    }),
  );
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
