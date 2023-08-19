import { Body, Controller, Get, Param, Post, Req, Res, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth-guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles-guard';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @UseGuards(AuthGuard, RolesGuard)
    @Roles("ADMIN")
    @Get()
    getAll() {
        return this.userService.getAllUsers()
    }

    @Get('/activate/:link')
    activate(@Param('link') link: string, @Res() res) {
        return this.userService.activate(link, res)
    }

}
