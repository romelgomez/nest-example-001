import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(Error)
export class SimpleErrorFilter implements ExceptionFilter {
  constructor(private readonly logger: Logger) {}

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // plus add to the logger the stack trace
    this.logger.error(
      `${request.method} ${request.originalUrl}`,
      exception.stack,
    );

    response.status(HttpStatus.I_AM_A_TEAPOT).json({
      statusCode: HttpStatus.I_AM_A_TEAPOT,
      timestamp: new Date().toISOString(),
      path: request.path,
      message: `${exception.message}  - I_AM_A_TEAPOT`,
    });
  }
}
