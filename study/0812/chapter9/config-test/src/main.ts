import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.getOrThrow<string>('SERVER_PORT');

  // Node는 문자열 포트도 OK지만, 숫자로 강제하고 싶으면 parseInt
  await app.listen(parseInt(port, 10));
}
bootstrap();
