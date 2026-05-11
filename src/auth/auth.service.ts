import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login() {
    const user = {
      id: 1,
      name: 'Tom',
    };

    const token = this.jwtService.sign(user);

    return {
      token,
    };
  }
}
