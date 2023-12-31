import { Body, Controller, Post } from '@nestjs/common';
import { Get, Param, Put, Req, UseGuards } from '@nestjs/common/decorators';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthGuard } from './auth-guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto)
    }

    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }

    @UseGuards(AuthGuard)
    @Put('/changepassword')
    changepassword(@Body() dto: {userDto: CreateUserDto, newPassword: string}) {
        return this.authService.changePassword(dto)
    }

    @Get()
    @UseGuards(AuthGuard)
    check(@Req() req) {
        return this.authService.checkUser(req)
    }
}
