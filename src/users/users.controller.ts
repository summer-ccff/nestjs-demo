import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryUserDto } from './dto/query-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(@Query() query: QueryUserDto) {
    const page = Number(query.page) || 1;
    const pageSize = Number(query.pageSize) || 2;
    const keyword = query.keyword || '';
    return this.usersService.findAll(page, pageSize, keyword);
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.create(body.name);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(Number(id), body.name);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.remove(Number(id));
  }

  @Post(':id/post')
  createPost(@Param('id') id: string, @Body() body: { title: string }) {
    return this.usersService.createPost(Number(id), body.title);
  }
}
