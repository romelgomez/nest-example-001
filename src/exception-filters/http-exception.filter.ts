import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionsFilter implements ExceptionFilter {
  constructor(private readonly logger: Logger) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    // plus add to the logger the stack trace
    this.logger.error(
      `${request.method} ${request.originalUrl} - ${status} error: ${exception.message}}`,
      // exception.stack,
    );

    console.log(`\n\n ..:: exception ::.. \n\n`);
    console.log(
      JSON.stringify(
        {
          ...exception,
        },
        null,
        2,
      ),
    );
    console.log(`\n\n<----\n\n`);

    // a way to get the response from the exception that validate the input with class-validator
    const exceptionResponse = exception.getResponse() as any;

    response.status(status).json({
      // statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.path,
      ...exceptionResponse,
      // message: `${exception.message}  - HttpException`,
      // response: exception.getResponse(),
      // exception: {
      //   ...exception
      // },
    });

    //   {
    //     "timestamp": "2023-07-07T18:44:59.323Z",
    //     "path": "/animals/cats",
    //     "statusCode": 400,
    //     "message": [
    //         "breed must be one of the following values: persa, siames, angora, bengala, birmano, bosque noruego, burmes, comun europeo, himalayo"
    //     ],
    //     "error": "Bad Request"
    // }
  }
}
