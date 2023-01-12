const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ComEmployeesSchema=new Schema({
    empName:{
        type: 'string',
        required: true,
        trim:true
    },
    department:[{
        type:Schema.Types.ObjectId,
        ref:'Department'
    }]
})

module.exports=mongoose.model('ComEmployee',ComEmployeesSchema)