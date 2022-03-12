import { Model } from 'mongoose';
import { Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    console.log('create user');

    const createdUser = new this.userModel(createUserDto);
    console.log(createdUser);
    return createdUser.save();
  }

  async findAll(query: object): Promise<User[]> {
    return this.userModel.find(query).exec();
  }
}

// @Injectable()
// export class UsersService {
//   private readonly users: User[] = [];

//   create(user: User) {
//     this.users.push(user);
//   }

//   findAll(): User[] {
//     return this.users;
//   }
// }
