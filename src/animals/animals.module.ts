import { Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { DogsModule } from 'src/dogs/dogs.module';

@Module({
  imports: [CatsModule, DogsModule],
  exports: [CatsModule, DogsModule],
})
export class AnimalsModule {}
