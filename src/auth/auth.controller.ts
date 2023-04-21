import {Controller, UseGuards, Request, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthGuard} from "@nestjs/passport";
import {loginDto} from "./dto/login.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }
    @UseGuards(AuthGuard('local'))
    @Post('login')
    signIn(@Request() req){
        return req.user;
    }
}
