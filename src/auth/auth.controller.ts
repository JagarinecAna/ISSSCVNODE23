import {Controller, UseGuards, Request, Post, Get} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthGuard} from "@nestjs/passport";
import {loginDto} from "./dto/login.dto";
import {Response} from "express";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }
    @UseGuards(AuthGuard('local'))
    @Post('login')
    signIn(@Request() req, res: Response){
        const jwt = req.user;
        res.setHeader('Set-Cookie', [jwt]).json();
    }
    @UseGuards(AuthGuard('jw'))
    @Get('profile')
    profile(@Request() req)
    {
        return req.user;
    }
}
