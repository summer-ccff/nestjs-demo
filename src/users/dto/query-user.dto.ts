import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class QueryUserDto {
  @IsNotEmpty()
  @IsString()
  page: string;

  @IsNotEmpty()
  @IsString()
  pageSize: string;

  @IsOptional()
  @IsString()
  keyword?: string;
}
