import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { User } from 'src/schema/user.schema';
import { UserService } from './user.service';
import { CreateuserDto } from 'src/dto/user/createUser.dto';
import { updateuserDto } from 'src/dto/user/updateUser.dto';

@Controller('user')
export class UserController {
  userRepository: any;
  constructor(private userService: UserService) {}

  @Get()
  getUser() {
    return this.userService.getUser();
  }

  @Post()
  async create(@Body() createuserDto: CreateuserDto) {
    return this.userService.createUser(createuserDto);
  }

  @Patch(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateuserDto: updateuserDto,
  ) {
    await this.userService.updateUser(id, updateuserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    await this.userService.deleteUser(id);
  }
}
