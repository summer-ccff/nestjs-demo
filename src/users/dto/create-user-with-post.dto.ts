import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserWithPostDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  title: string;
}
