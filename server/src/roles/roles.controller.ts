import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth-guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles-guard';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {

    constructor(private roleService: RolesService) {}

    @UseGuards(AuthGuard, RolesGuard)
    @Roles("ADMIN")
    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto)
    }

    @UseGuards(AuthGuard)
    @Get('/:value')
    get(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value)
    }
}