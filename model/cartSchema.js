const mongoose = require('mongoose')
const Schema=mongoose.Schema

const cartSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    products:[{
        type:Schema.Types.ObjectId,
        ref:'product'
    }]
},
    {timestamps:true}
)

module.exports=mongoose.model('cart',cartSchema)