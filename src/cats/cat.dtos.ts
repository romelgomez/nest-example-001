import { CatBreed } from 'src/enums/cat-breed.enum';
import { IsEnum, IsInt, IsString } from 'class-validator';

export class CatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsEnum(CatBreed)
  breed: string;

  @IsString()
  meow: string;
}
