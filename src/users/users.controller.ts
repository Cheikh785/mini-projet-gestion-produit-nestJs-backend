import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll(): User[] {
        return this.usersService.findAll();
    }

    @Post()
    createUser(@Body() newUser: User) {
        console.log('Our new user : ', newUser);
        this.usersService.createUser(newUser);
    }
}
