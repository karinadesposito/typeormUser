import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>){}

  createUser(user: CreateUserDto) {
    const newUser = this.userRepository.create(user)
    return this.userRepository.save(newUser);
  }

 getUsers() {
    return this.userRepository.find();
  }

  getUserById(id: number) {
    return `This action returns a #${id} user`;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  deleteUser(id: number) {
    return `This action removes a #${id} user`;
  }
}
