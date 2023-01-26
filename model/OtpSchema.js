const mongoose=require('mongoose');
const Schema=mongoose.Schema

const OtpSchema=new Schema({
    
    Otp:{
        type:Number
    },
    UserId:{
        type:Schema.Types.ObjectId,
        ref:'signup'
    }
},
    {timestamps:true}
)
module.exports=mongoose.model('Otp',OtpSchema)