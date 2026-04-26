import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class QueryUserDto {
  @IsString()
  @IsNotEmpty()
  page: string;

  @IsString()
  @IsNotEmpty()
  pageSize: string;

  @IsString()
  @IsOptional()
  keyword?: string;
}
