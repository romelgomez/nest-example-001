import { Animal } from './animal';

export class Cat extends Animal {
  meow: string;

  constructor(name: string, age: number, breed: string, meow: string) {
    super();
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.meow = meow;
  }
}
