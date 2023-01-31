const mongoose = require('mongoose')
const Schema=mongoose.Schema

const royalWallet=new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    token:{
        type:Number,
        default:100
    },
    wallet:{
        type:Number,
        default:100
    }
},
    {timestamps:true}
)

module.exports =mongoose.model('royalWallet',royalWallet)