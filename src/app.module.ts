import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [AnimalsModule, CustomersModule, AnimalsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
