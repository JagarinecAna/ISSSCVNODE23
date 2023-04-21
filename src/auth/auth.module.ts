import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { User } from "../user/entities/user.entity";
import { UserService } from "../user/user.service";
import { UserModule } from "../user/user.module";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule} from "@nestjs/config";
import {LocalStrategy} from "./strategies/local.strategy";
import {JwtStrategy} from "./strategies/jwt.strategy";

@Module({
  imports: [UserModule,
    TypeOrmModule.forFeature([User]),
      ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },})],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
