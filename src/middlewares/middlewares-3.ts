// class base middleware

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CustomersService } from 'src/customers/customers.service';

@Injectable()
export default class Middleware3 implements NestMiddleware {
  constructor(private readonly customerService: CustomersService) {
    const allCustomers = this.customerService.findAll();

    console.log(`\n\n ..:: middlewares-3 constructor ::.. \n\n`);
    console.log(
      JSON.stringify(
        {
          allCustomers: allCustomers,
        },
        null,
        2,
      ),
    );
    console.log(`\n\n<----\n\n`);
  }

  use(req: Request, res: Response, next: NextFunction) {
    console.log('\n middlewares-3', req.method, req.path, `\n`);
    next();
  }
}
