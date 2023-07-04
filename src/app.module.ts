import { Module } from '@nestjs/common';
import { AnimalsModule } from './animals/animals.module';
import { GlobalModule } from './global/global.module';

@Module({
  imports: [AnimalsModule, GlobalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
