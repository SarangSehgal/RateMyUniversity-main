import mongoose from "mongoose"
const Schema=mongoose.Schema
const UniversitySchema=new Schema({
    name:{type:String,required:true},
    location:{type:String,required:true},
    description:{type:String,required:true},
    imagebase64:{type:[String]}
    
})
const University=mongoose.model('University',UniversitySchema)
export default University;
