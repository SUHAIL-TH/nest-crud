import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Ninja } from './ninja.model';

@Injectable()
export class NinjaService {
    constructor(@InjectModel('ninjas' ) private readonly ninjaModel:Model<Ninja>){}

    private ninjas=[
        {id:0,name:"suhail",place:"kannur"},
        {id:1,name:"haniya",place:"kozhikode"}
    ]
   async getNinjas(place?:'kannur'|"kozhikode"){
        // if(place){
        //     return this.ninjas.filter((ninja)=>ninja.place===place)
        // }
        // return this.ninjas
        let data= await this.ninjaModel.find()
        return data
    }
    
    getNinja(id:number ){
        const ninja=this.ninjas.find((ninja)=>ninja.id===id)
      
        if(!ninja){
            throw new Error ('ninja is not found')
        }
        return ninja
    }
   async createNinja(createninja:Ninja){
        // const newNinja={
        //     ...createninja,
        //     id:Date.now()
        // };
        const newNinja=new this.ninjaModel(createninja)
      await newNinja.save();
      console.log(newNinja);
      
        return newNinja
    }
//    updateNinja(id:number,updateNinjadto:N){     //this is the normal way updataing a value in database through nest js
//     this.ninjas=this.ninjas.map((ninja)=>{
//         if(ninja.id===id){
//             return {...ninja,...updateNinjadto}
//         }
//         return ninja

//     })
//     return this.getNinja(id)
//    }

async updateNinja(id:string,updatedata:Ninja){
    console.log(id);
    
    let data=await this.ninjaModel.updateOne({_id:id} ,{$set:{name:updatedata.name}})
    return data
}

   removeNinja(id:number){
    const tobeRemoved=this.getNinja(id)
    this.ninjas=this.ninjas.filter((ninja)=>ninja.id!=id)
    return tobeRemoved
   }
}
 