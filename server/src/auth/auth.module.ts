import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MailModule } from 'src/mail/mail.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: process.env.JWT_ACCESS_KEY || "secr37k3y",
      signOptions: {
        expiresIn: '24h'
      }
    }),
    MailModule
  ],
  exports: [
    AuthService,
    JwtModule
  ]
})
export class AuthModule {}
