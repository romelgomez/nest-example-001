import { Injectable } from '@nestjs/common';
import { Customer } from '../models/customer';

@Injectable()
export class CustomersService {
  customers: Customer[] = [];

  create(customer: Customer) {
    this.customers.push(customer);
  }

  findAll(): Customer[] {
    return this.customers;
  }

  findByName(name: string): Customer {
    return this.customers.find((customer) => customer.name === name);
  }
}
