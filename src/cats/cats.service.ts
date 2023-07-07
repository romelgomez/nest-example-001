import { Injectable } from '@nestjs/common';
import { Cat } from './cat.model';

@Injectable()
export class CatsService {
  cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findByName(name: string): Cat {
    return this.cats.find((cat) => cat.name === name);
  }
}
