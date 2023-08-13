import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjaModule } from './ninja/ninja.module';
import { UsersModule } from './users/users.module';
import {MongooseModule} from '@nestjs/mongoose'


@Module({
  imports: [NinjaModule, UsersModule,MongooseModule.forRoot('mongodb://0.0.0.0:27017/nest')],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
