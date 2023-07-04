import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const portDev = process.env.PORT || 3001;

  const app = await NestFactory.create(AppModule);

  await app.listen(3000);

  const app2 = await NestFactory.create(AppModule);

  await app2.listen(portDev);

  console.log(
    `\n\n ..:: Application is running on: http://localhost:${port}/ \n\n`,
  );

  console.log(
    `\n\n ..:: Application is running on: http://localhost:${portDev}/ \n\n`,
  );
}
bootstrap();
