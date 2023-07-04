import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';

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

  // nestjs way, it will serelize the object to json
  @Get('cats')
  getCats(): Cat[] {
    return this.cats;
  }

  // express way, we have the request decorator and response decorator
  @Get('dogs')
  getDogs(@Req() req: Request, @Res() res: Response): void {
    res.send(this.dogs);
  }

  @Post('cats')
  postCat(@Body() body): Cat {
    const cat = new Cat(body.name, body.age, 'Tabby', 'Meow');

    this.cats.push(cat);

    return cat;
  }

  @Post('dogs')
  postDog(@Body() body): Dog {
    const dog = new Dog(body.name, body.age, 'Golden Retriever', true);

    this.dogs.push(dog);

    return dog;
  }
}
