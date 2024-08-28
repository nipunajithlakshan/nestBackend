import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { DatabaseModule } from 'src/databaseConfig/database.module';
import { User } from './schema/user.schema';
import { UserService } from './user/user.service';
import { UsersModule } from './user/user.module';
// import { UserModule } from './user/user.module';


@Module({
  imports: [UsersModule,DatabaseModule],
  controllers: [],
  providers: [],


 
})
export class AppModule {}
