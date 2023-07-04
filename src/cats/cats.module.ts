import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CustomProvidersEnum } from '../constants';
import { IConstastExample } from '../interfaces';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [
    CatsService,
    {
      provide: CustomProvidersEnum.CATS_SERVICE_MOCK,
      useClass: CatsService,
    },
    {
      provide: CustomProvidersEnum.CONSTANT_EXAMPLE,
      useValue: {
        name: 'romel',
        age: 25,
      } as IConstastExample,
    },
  ],
})
export class CatsModule {}
