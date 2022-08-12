import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

    constructor(@InjectModel('Users') private userModel: Model<User>) { }

    async getAllUsers(): Promise<any> {
        const users = await this.userModel.find().exec();
        return users.map(user => ({
            id          :   user.id,
            firstname   :   user.firstname,
            lastname    :   user.lastname,
            address     :   user.address
        })); 
    }

    async getMaxId(): Promise<Number> {
        const maxId = await this.userModel.find().sort({id:-1}).limit(1).exec();
        return maxId[0].id;
    }

    async getUser(id: Number): Promise<User> {
        let user;
        try {
            user = await this.userModel.find({id: id}).exec();
        } catch (error) {   
            throw new NotFoundException('Could not find user');
        }
        if (!user) {
            throw new NotFoundException('Could not find user');
        }
        return user;
    }

    async createUser(user: User): Promise<User> {
        // const id = Math.floor(Math.random() * 1000);
        let id;
        // Pour créer un nouvel utilisateur, puisque `id` n'est pas généré automatiquement, on recupère le plus grand `id`se trouvant dans la base de données et on l'incrémente de 1.
        const maxId = await this.getMaxId();
        (maxId) ? (id = maxId.valueOf() + 1) : id = 1;
        const newUser = new this.userModel({
            id          :   id,
            firstname   :   user.firstname,
            lastname    :   user.lastname,
            address     :   user.address
        });
        const result = await newUser.save();
        return result;
    }

    async updateUser(id: Number, user: User): Promise<User> {
        const updatedUser   =   await this.userModel.findOneAndUpdate({id: id}, user, { new : true});
        if (!updatedUser)       throw new NotFoundException('Could not find user');
        return updatedUser;
    }

    async deleteUser(id: Number) {
        const result = await this.userModel.deleteOne({ id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException('Could not find user');
        }
        return 'User remove successfuly';
    }
}
