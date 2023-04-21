import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { User } from "../user/entities/user.entity";
import { UserService } from "../user/user.service";
import { UserModule } from "../user/user.module";
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports: [UserModule,
    TypeOrmModule.forFeature([User])
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },],
  controllers: [AuthController],
  providers: [AuthService, UserService]
})
export class AuthModule {}
