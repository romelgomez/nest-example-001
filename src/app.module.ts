import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AnimalsModule } from './animals/animals.module';
import { GlobalModule } from './global/global.module';
import Middleware1 from './middlewares/middlewares-1';
import Middleware2 from './middlewares/middlewares-2';
import Middleware3 from './middlewares/middlewares-3';

@Module({
  imports: [AnimalsModule, GlobalModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  // implement class based middleware
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Middleware1, Middleware2, Middleware3).forRoutes('*');
  }
}
