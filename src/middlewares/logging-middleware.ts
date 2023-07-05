import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export default class LoggingMiddleware implements NestMiddleware {
  constructor(private readonly logger: Logger) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { method, baseUrl } = req;

    const requestTime = new Date().getTime();

    res.on('finish', () => {
      const { statusCode } = res;
      const responseTime = new Date().getTime() - requestTime;

      if (statusCode >= 500) {
        this.logger.error(
          `${method} ${baseUrl} ${statusCode} ${responseTime}ms`,
        );
      } else if (statusCode >= 400) {
        this.logger.warn(
          `${method} ${baseUrl} ${statusCode} ${responseTime}ms`,
        );
      } else if (statusCode >= 300) {
        this.logger.debug(
          `${method} ${baseUrl} ${statusCode} ${responseTime}ms`,
        );
      } else {
        this.logger.log(`${method} ${baseUrl} ${statusCode} ${responseTime}ms`);
      }
    });

    next();
  }
}
