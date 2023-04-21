import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
   constructor(
       private userService: UserService
       private jwtService: JwtService) {
   }
    async signIn(email: string, password: string): Promise<any> {
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new NotFoundException();
        }
        if (!(await bcrypt.compare(password, user.password))) {
            throw new BadRequestException();
        }

        const payload = {
            "email": user.email,
            "sub": user.id
        };

        const accessToken = this.jwtService.sign(payload);
        return accessTOken;


        return user;
    }
}
