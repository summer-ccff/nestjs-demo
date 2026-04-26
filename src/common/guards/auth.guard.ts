import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(ctx: ExecutionContext): boolean {
    const request = ctx.switchToHttp().getRequest();
    const token = request.headers['token'];

    if (!token) {
      throw new UnauthorizedException('请先登录');
    }

    request.user = {
      id: 1,
      name: 'Tom',
    };

    return true;
  }
}
