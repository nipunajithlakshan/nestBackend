import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/schema/user.schema';
import { CreateuserDto } from 'src/dto/user/createUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { updateuserDto } from 'src/dto/user/updateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  //   createUser(userDetails: createuserDto) {
  //     const newUser = this.userRepository.create({ ...userDetails});
  //     return this.userRepository.save(newUser);
  // }

  getUser() {
    return this.userRepository.find();
  }

  async createUser(userDetails: CreateuserDto) {
    try {
      const newUser = this.userRepository.create({ ...userDetails });
      const savedUser = await this.userRepository.save(newUser);
      return savedUser;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error; // Rethrow the error to handle it further up the call stack if needed
    }
  }

  async updateUser(id: number, updateUserdetails: updateuserDto) {
    try {
      return this.userRepository.update({ id }, { ...updateUserdetails });
      console.log('Update successfull');
    } catch (erro) {
      console.error(erro);
    }
  }

  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }
}
