import { Animal } from './animal';

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
