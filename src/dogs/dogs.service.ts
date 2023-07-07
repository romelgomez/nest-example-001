import { Injectable } from '@nestjs/common';
import { Dog } from './dog.model';

@Injectable()
export class DogsService {
  dogs: Dog[] = [];

  create(dog: Dog) {
    this.dogs.push(dog);
  }

  findAll(): Dog[] {
    return this.dogs;
  }

  findByName(name: string): Dog {
    return this.dogs.find((dog) => dog.name === name);
  }
}
