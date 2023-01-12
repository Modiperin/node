const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    name:{
        type: 'String',
    },
    email:{
        type: String
    },
    password:{
        type:'String'
    },
    age:{
        type:'Number'
    },
    isActive:{
        type:'Boolean' 
    }
})
// mongoose.model('User',userSchema);
// module.exports = userSchema;
module.exports = mongoose.model('employees',userSchema);