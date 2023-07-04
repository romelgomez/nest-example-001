import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [CatsModule, DogsModule, CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
