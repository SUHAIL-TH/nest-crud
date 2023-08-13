import { Module } from '@nestjs/common';
import { NinjaController } from './ninja.controller';
import { NinjaService } from './ninja.service';
import {MongooseModule} from '@nestjs/mongoose'
import { NinjaSchema } from './ninja.model';

@Module({
  imports:[MongooseModule.forFeature([{name:'ninjas', schema:NinjaSchema}])],
  controllers: [NinjaController],
  providers: [NinjaService]
})
export class NinjaModule {}
