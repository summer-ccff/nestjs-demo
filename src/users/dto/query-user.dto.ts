import { IsNotEmpty, IsString } from 'class-validator';

export class QueryUserDto {
  @IsNotEmpty()
  @IsString()
  page: string;

  @IsNotEmpty()
  @IsString()
  pageSize: string;
}
