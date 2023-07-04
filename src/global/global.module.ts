import { Global, Module } from '@nestjs/common';
import { CustomersService } from 'src/customers/customers.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [CustomersService],
  exports: [CustomersService],
})
export class GlobalModule {}
