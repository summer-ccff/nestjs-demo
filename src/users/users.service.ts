import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    { id: 1, name: 'Tom' },
    { id: 2, name: 'Jerry' },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(name: string) {
    const newUser = {
      id: this.users.length + 1,
      name,
    };
    this.users.push(newUser);
    return newUser;
  }
}
