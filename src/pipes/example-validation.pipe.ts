import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import errors from '../config/errors.config';

@Injectable()
export class ExampleValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(`\n\n ..:: ExampleValidationPipe ::.. \n\n`);
    console.log(
      JSON.stringify(
        {
          value,
          metadata,
        },
        null,
        2,
      ),
    );
    console.log(`\n\n<----\n\n`);

    throw new HttpException(errors.validationFailed, HttpStatus.BAD_REQUEST);

    return value;
  }
}
