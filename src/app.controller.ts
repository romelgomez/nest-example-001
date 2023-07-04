import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

class Animal {
  name: string;
  age: number;
  breed: string;
}

class Cat extends Animal {
  meow: string;

  constructor(name: string, age: number, breed: string, meow: string) {
    super();
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.meow = meow;
  }
}

@Controller('animals')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('cats')
  getCats(): Cat {
    const cat = new Cat('Mittens', 2, 'Tabby', 'Meow');

    return cat;
  }
}
