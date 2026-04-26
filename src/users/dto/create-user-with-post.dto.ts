import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserWithPostDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  title: string;
}
