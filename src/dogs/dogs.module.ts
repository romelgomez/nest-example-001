import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';

@Module({
  imports: [],
  controllers: [DogsController],
  providers: [],
})
export class DogsModule {}
