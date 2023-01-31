const mongoose = require('mongoose')
const Schema=mongoose.Schema

const royalTokenApp=new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    allotedSpace:{
        type:Number,
        default:100,
        description:"By default 100mb of is space alloted to all users"
    },
    spaceUsed:{
        type:Number,
        default:0
    },
    wallet:[{
        type:Schema.Types.ObjectId,
        ref:'royalWallet'
    }],
    dataAdded:[{
        type:String
    }]
})

module.exports =mongoose.model('royaluser',royalTokenApp)