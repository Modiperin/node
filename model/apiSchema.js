const mongoose=require('mongoose')
const Schema=mongoose.Schema

const apiSchema=new Schema({
    apiName:{
        type:String
    },
    totalCounts:{
        type:Number
    }
})
module.exports=mongoose.model('api',apiSchema)