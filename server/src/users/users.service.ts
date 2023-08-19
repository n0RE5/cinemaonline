import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { Role } from 'src/roles/roles.model';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { Sequelize } from 'sequelize';
import { FilesService } from 'src/files/files.service';
import { BasketService } from 'src/basket/basket.service';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User, 
                                   private roleService: RolesService, 
                                   private fileService: FilesService,
                                   private basketService: BasketService
    ) {}

    async createUser(dto: CreateUserDto) {
         const user = await this.userRepository.create(dto)
         const role = await this.roleService.getRoleOrCreate("USER")
         await this.basketService.createBasket(user.id)
         await user.$set('roles', [role.id])
         user.roles = [role]
         return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAndCountAll({include: {all: true}})
        return users
    }

    async getUser(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
        return user
    }

    async activate(link: string, res: any) {
        const user = await this.userRepository.findOne({where: {activationLink: link}})
        if(!user) {
            throw new HttpException("Incorrect activation link", HttpStatus.BAD_REQUEST)
        }
        await user.update({isActivated: true})

        return res.redirect(process.env.CLIENT_URL + '/auth/activated')
    }
}
