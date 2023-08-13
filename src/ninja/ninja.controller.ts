import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { query } from 'express';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjaService } from './ninja.service';
import { Ninja } from './ninja.model';

@Controller('ninja')
export class NinjaController {
    constructor(private service:NinjaService){}


//get /ninja?type=suhail
@Get()
getNinjas(@Query('place') place:'kannur'|'kozhikode'){
   
    return this.service.getNinjas(place)
}
//get singel ninja
@Get(':id')
getOneNinja(@Param('id' ,ParseIntPipe) id:number){
    try {
        
        return this.service.getNinja(id)
    } catch (error) {
        throw new NotFoundException();
    }
}
//post ninja
@Post( )
createNinja(@Body() createNinja:Ninja){
    return this.service.createNinja(createNinja)
}
//put ninja
@Patch(':id')
updateNinja(@Param('id') id:string, @Body() updateNinjaData:Ninja){
   return this.service.updateNinja(id,updateNinjaData)
}
//delete ninja
@Delete(':id')
deleteNinja(@Param('id') id:number){
    return this.service.removeNinja(+id)
}
}