import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class MyFirstPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(`\n\n ..:: MyFirstPipe ::.. \n\n`);
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

    if (value === 'bad') {
      throw new BadRequestException();
    }
    return value;
  }
}
