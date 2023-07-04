import { Controller, Get, Req, Res, Body, Post, Param } from '@nestjs/common';
import { Cat } from '../models/cat';
import { Response, Request } from 'express';
import { CatsService } from './cats.service';

@Controller('animals')
export class CatsController {
  constructor(private catsService: CatsService) {}

  // nestjs way, it will serelize the object to json
  @Get('cats')
  getCats(): Cat[] {
    return this.catsService.findAll();
  }

  // nestjs way, to pass the body we need to use the body decorator
  @Post('cats')
  postCat(@Body() body): Cat {
    const cat = new Cat(body.name, body.age, 'Tabby', 'Meow');

    this.catsService.create(cat);

    return cat;
  }

  // express way, we have the request decorator and response decorator
  @Post('cats/express-way')
  postCatExpress(@Req() req: Request, @Res() res: Response): void {
    const cat = new Cat(req.body.name, req.body.age, 'Tabby', 'Meow');

    this.catsService.create(cat);

    res.send(cat);
  }

  // nestjs way, param decorator example
  // return a cat by name
  @Get('cats/:name')
  getCatByName(@Param('name') name: string): Cat {
    return this.catsService.findByName(name);
  }
}
