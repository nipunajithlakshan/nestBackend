import { Module } from "@nestjs/common";
// import { userController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';
import { User } from "src/schema/user.schema";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from "./user.controller";

// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService]
  })
  export class UsersModule {}