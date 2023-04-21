import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import {User} from "./entities/user.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import {AuthService} from "../auth/auth.service";

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [AuthService, UserService]
})
export class UserModule {}
