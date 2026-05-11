import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

const jwtModuleOptions = {
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    return {
      secret: configService.get('JWT_SECRET'),
      signOptions: {
        expiresIn: '7d' as const,
      },
    };
  },
};

@Module({
  imports: [JwtModule.registerAsync(jwtModuleOptions)],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
