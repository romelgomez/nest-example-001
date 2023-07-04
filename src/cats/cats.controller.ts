import {
  Controller,
  Get,
  Req,
  Res,
  Body,
  Post,
  Param,
  Inject,
} from '@nestjs/common';
import { Cat } from '../models/cat';
import { Response, Request } from 'express';
import { CatsService } from './cats.service';
import { CustomersService } from 'src/customers/customers.service';
import { CustomProvidersEnum } from '../constants';
import { IConstastExample } from '../interfaces';

@Controller('animals')
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly customerService: CustomersService,
    @Inject(CustomProvidersEnum.CONSTANT_EXAMPLE)
    private readonly constantExample: IConstastExample,
    @Inject(CustomProvidersEnum.CATS_SERVICE_MOCK)
    private readonly catsServiceMock: CustomersService,
  ) {}

  // nestjs way, it will serelize the object to json
  @Get('cats')
  getCats(): Cat[] {
    console.log(`\n\n ..:: custom provider example  ::.. \n\n`);
    console.log(
      JSON.stringify(
        {
          ...this.constantExample,
        },
        null,
        2,
      ),
    );
    console.log(`\n\n<----\n\n`);

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
