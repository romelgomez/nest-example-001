import { Animal } from '../animals/animal.model';
import { IsString } from 'class-validator';

// Model
export class Cat extends Animal {
  @IsString()
  meow: string;

  constructor(name: string, age: number, breed: string, meow: string) {
    super();
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.meow = meow;
  }
}
