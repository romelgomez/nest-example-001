import { IsString, IsInt } from 'class-validator';

export class AnimalDtos {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}
