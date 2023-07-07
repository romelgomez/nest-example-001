import { Controller, Get, Req, Res, Body, Post, Param } from '@nestjs/common';
import { Customer } from './customer.model';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() customer: Customer) {
    this.customersService.create(customer);
  }

  @Get()
  findAll(): Customer[] {
    return this.customersService.findAll();
  }

  @Get(':name')
  findByName(@Param('name') name: string): Customer {
    return this.customersService.findByName(name);
  }
}
