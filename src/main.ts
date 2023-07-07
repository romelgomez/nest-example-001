import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
// import middlewares1 from './middlewares/middlewares-1';
// import middlewares2 from './middlewares/middlewares-2';
import { HttpExceptionsFilter } from './exception-filters/http-exception.filter';
import { SimpleErrorFilter } from './exception-filters/simple-error.filter';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const portDev = process.env.PORT || 3001;

  const app = await NestFactory.create(AppModule);

  // global middleware example, it will be applied to every route
  // app.use(middlewares1);
  // app.use(middlewares2);

  const loggerInstance = app.get(Logger);
  app.useGlobalFilters(new SimpleErrorFilter(loggerInstance));
  app.useGlobalFilters(new HttpExceptionsFilter(loggerInstance));

  // this validate the input data of the body of the request
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages:   false,
  }));

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
