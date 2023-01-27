const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const apiUserSchema=new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    ApiDet:[{
        ApiId:{
            type:Schema.Types.ObjectId,
            ref:'api'    
        },
        count:{
            type:Number
        },
        expiresIn:{
            type:String
        },
        token:{
            type:String
        }
    
    }]
})
module.exports=mongoose.model('ApiUser',apiUserSchema);