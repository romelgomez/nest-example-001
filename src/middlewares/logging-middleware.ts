import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export default class LoggingMiddleware implements NestMiddleware {
  constructor(private readonly logger: Logger) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { method, path } = req;

    const requestTime = new Date().getTime();

    res.on('finish', () => {
      const { statusCode } = res;
      const responseTime = new Date().getTime() - requestTime;

      if (statusCode >= 500) {
        this.logger.error(`${method} ${path} ${statusCode} ${responseTime}ms`);
      } else if (statusCode >= 400) {
        this.logger.warn(`${method} ${path} ${statusCode} ${responseTime}ms`);
      } else if (statusCode >= 300) {
        this.logger.debug(`${method} ${path} ${statusCode} ${responseTime}ms`);
      } else {
        this.logger.log(`${method} ${path} ${statusCode} ${responseTime}ms`);
      }
    });

    this.logger.log(`Request...`);
    next();
  }
}
