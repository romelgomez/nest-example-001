import {
  Controller,
  Get,
  Req,
  Res,
  Body,
  Post,
  Param,
  Inject,
  HttpException,
  HttpStatus,
  BadRequestException,
  InternalServerErrorException,
  UsePipes,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { Cat } from './cat.model';
import { Response, Request } from 'express';
import { CatsService } from './cats.service';
import { CustomersService } from 'src/customers/customers.service';
import { CustomProvidersEnum } from '../constants';
import { IConstastExample } from '../interfaces';
import errors from 'src/config/errors.config';
import { MyFirstPipe } from 'src/pipes/my-first.pipe';
import { ToNumberPipe } from 'src/pipes/to-number.pipe';
import { ExampleValidationPipe } from 'src/pipes/example-validation.pipe';
import { CatDto } from './cat.dtos';
import { CatBreed } from 'src/enums/cat-breed.enum';

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

  // nestjs way to use pipes for query params
  // getCats(@Query('limit', ToNumberPipe) limit: string): Cat[] {

  // using nest js pipes validation verification can prevent the controller to be executed
  @UsePipes(ExampleValidationPipe)
  getCats(
    // using nest js pipes
    @Query('limit', new ParseIntPipe({ errorHttpStatusCode: 401 }))
    limit: string,
  ): Cat[] {
    console.log('limit', limit);
    console.log('limit type', typeof limit);

    // console.log(`\n\n ..::  ::.. \n\n`);
    // console.log(
    //   JSON.stringify(
    //     {
    //       limit,
    //     },
    //     null,
    //     2,
    //   ),
    // );
    // console.log(`\n\n<----\n\n`);

    // console.log(`\n\n ..:: custom provider example  ::.. \n\n`);
    // console.log(
    //   JSON.stringify(
    //     {
    //       ...this.constantExample,
    //     },
    //     null,
    //     2,
    //   ),
    // );
    // console.log(`\n\n<----\n\n`);

    // throw new HttpException(
    //   {
    //     error: true,
    //     serverTime: new Date(),
    //     message: 'this is a custom error message',
    //   },
    //   HttpStatus.INTERNAL_SERVER_ERROR,
    //   {
    //     cause: new Error('this is the cause of the error'),
    //   },
    // );

    return this.catsService.findAll();
  }

  // nestjs way of implementing a custom pipe
  // @UsePipes(MyFirstPipe)
  // nestjs way, to pass the body we need to use the body decorator
  @Post('cats')
  postCat(@Body() body: CatDto): Cat {
    // const { name, age } = body;

    console.log('..:: postCat ::..', body);

    const cat = new Cat(body.name, +body.age, body.breed, body.meow);

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

  @Get('cats-http-error')
  getCatHttpError(): Cat[] {
    // using the nestjs way to throw an error with exeption http filter
    throw new InternalServerErrorException(
      errors.internalErrorExample,
      // {
      //   error: true,
      //   serverTime: new Date(),
      //   message:
      //     'this is a custom error message - InternalServerErrorException',
      // },
      {
        cause: new Error('this is the cause of the error'),
      },
    );

    // use then manual nestjs  way to throw an error
    // throw new HttpException(
    //   {
    //     error: true,
    //     serverTime: new Date(),
    //     message: 'this is a custom error message',
    //   },
    //   HttpStatus.INTERNAL_SERVER_ERROR,
    //   {
    //     cause: new Error('this is the cause of the error'),
    //   },
    // );

    return this.catsService.findAll();
  }
  @Get('cats-simple-error')
  getCatError(): Cat[] {
    // using the nestjs way to throw an error simple with exeption filter
    throw new Error('this is a simple error');

    // use then manual nestjs  way to throw an error
    // throw new HttpException(
    //   {
    //     error: true,
    //     serverTime: new Date(),
    //     message: 'this is a custom error message',
    //   },
    //   HttpStatus.INTERNAL_SERVER_ERROR,
    //   {
    //     cause: new Error('this is the cause of the error'),
    //   },
    // );

    return this.catsService.findAll();
  }
}
