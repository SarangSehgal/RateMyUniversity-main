import mongoose from "mongoose"
const Schema=mongoose.Schema
const reviewSchema=new Schema({
    name:{type:String,required:true},
    comment:{type:String,required:true},
    rating:{type:String,required:true},
    imagebase64:{type:[String]}
    
})
const Review=mongoose.model('Review',reviewSchema)
export default Review