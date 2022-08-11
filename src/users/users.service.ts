import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
    users: User[] = [
        {
            _id: '1',
            firstname: 'Cheikh Oumar',
            lastname: 'BA',
            address: 'Keur Massar'
        },
        {
            _id: '2',
            firstname: 'Fatou',
            lastname: 'Diop',
            address: 'Guédiawaye'
        }
    ]

    findAll(): User[] {
        return this.users;
    }

    createUser(user: User) {
        this.users = [...this.users, user];
    }
}
