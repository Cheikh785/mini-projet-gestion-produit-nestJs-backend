import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async getUsers(): Promise<any[]> {
        const users = await this.usersService.getAllUsers();
        return users;
    }

    @Get(':id')
    async getUser(@Param('id') id: Number): Promise<User> {
        const user = await this.usersService.getUser(id);
        return user;
    }

    @Post()
    async createUser(@Body() newUser: User) {
        const result = await this.usersService.createUser(newUser);
        // console.log('Our new user : ', result);
        return "Utilisateur ajouté avec succès : " + result;
    }
    @Patch(':id')
    async updateUserr(@Param('id') id: Number, @Body() user: User): Promise<User> {
        const userUpdated = await this.usersService.updateUser(id, user);
        return userUpdated;
    }

    @Delete(':id')
    removeUser(@Param('id') id: Number) {
        return this.usersService.deleteUser(id);
    }
}
