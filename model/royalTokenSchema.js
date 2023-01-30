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
    credit:{
        type:Number,
        default:100
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
    wallet:{
        type:Schema.Types.ObjectId,
        ref:'royalWallet'
    },
    dataAdded:[{
        type:String
    }]
    // totalUsed:{
    //     type:Number
    // }
})

module.exports =mongoose.model('royaluser',royalTokenApp)