import { Body, Controller, Get, Post, Res } from '@nestjs/common';
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
  cats: Cat[] = [];
  dogs: Dog[] = [];

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cats')
  getCats(): Cat[] {
    // const cat = new Cat('Mittens', 2, 'Tabby', 'Meow');

    return this.cats;
  }

  @Get('dogs')
  getDogs(@Res() res): Dog {
    // const dog = new Dog('Rover', 4, 'Golden Retriever', true);

    return res.send(this.dogs);
  }

  @Post('cats')
  postCat(@Body() body): Cat {
    const cat = new Cat(body.name, body.age, 'Tabby', 'Meow');

    this.cats.push(cat);

    return cat;
  }

  @Post('dogs')
  postDog(@Body() body): Dog {
    console.log(`\n\n ..:: res ::.. \n\n`);
    console.log(
      JSON.stringify(
        {
          body: body,
        },
        null,
        2,
      ),
    );
    console.log(`\n\n<----\n\n`);

    const dog = new Dog(body.name, body.age, 'Golden Retriever', true);

    this.dogs.push(dog);

    return dog;
  }
}
