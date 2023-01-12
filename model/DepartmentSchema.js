const mongoose = require('mongoose')
const Schema = mongoose.Schema


const departmentSchema=new Schema({
    deptName:{
        type: 'string',
        required:true,
        unique:true,
        trim:true
    },
    location:{
        type:'string',
        required:true,
        trim:true
    }
})

module.exports=mongoose.model('Department',departmentSchema)