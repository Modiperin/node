const mongoose=require('mongoose');
const Schema=mongoose.Schema

const signUpSchema=new Schema({
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    ipAddress:{
        type:String
    },
    Otp:{
        type:Number
    },
    addAt:{
        type:Date
    }
})
module.exports=mongoose.model('signup',signUpSchema)