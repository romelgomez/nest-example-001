import { Controller, Get, Req, Res, Body, Post, Param } from '@nestjs/common';
import { Dog } from '../models/dog';
import { Response, Request } from 'express';

@Controller('animals')
export class DogsController {
  dogs: Dog[] = [];

  // express way, we have the request decorator and response decorator
  @Get('dogs')
  getDogs(@Req() req: Request, @Res() res: Response): void {
    res.send(this.dogs);
  }

  @Post('dogs')
  postDog(@Body() body: Partial<Dog>): Dog {
    const dog = new Dog(body.name, body.age, 'Golden Retriever', true);

    this.dogs.push(dog);

    return dog;
  }

  // express way, param decorator example
  // return a dog by name
  @Get('dogs/:name')
  getDogByName(
    @Param() params: { name: string },
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const name = params?.name;

    if (!name) {
      res.send('No name provided');
    }

    const dog = this.dogs.find((dog) => dog.name === name);

    res.send(dog);
  }
}
