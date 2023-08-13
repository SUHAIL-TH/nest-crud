import * as mongoose from 'mongoose'

export const NinjaSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    }
})

 export interface Ninja{
    id?:string,
    name?:string,
    place?:string
 }