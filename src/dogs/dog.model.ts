import { CatBreed } from 'src/enums/cat-breed.enum';
import { Animal } from '../animals/animal.model';

export class Dog extends Animal {
  goodBoy: boolean;

  constructor(name: string, age: number, breed: string, goodBoy: boolean) {
    super();
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.goodBoy = goodBoy;
  }
}
