import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
// import { Request } from 'express';

class Animal {
  name: string;
  age: number;
  breed: string;
}

class Dog extends Animal {
  goodBoy: boolean;

  constructor(name: string, age: number, breed: string, goodBoy: boolean) {
    super();
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.goodBoy = goodBoy;
  }
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

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cats')
  getCats(): Cat {
    const cat = new Cat('Mittens', 2, 'Tabby', 'Meow');

    return cat;
  }

  @Get('dogs')
  getDogs(@Res() res): Dog {
    const dog = new Dog('Rover', 4, 'Golden Retriever', true);

    return res.send(dog);
  }
}
