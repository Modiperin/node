const departmentSchema=require('../model/DepartmentSchema')

exports.addDepartment=((req,res)=>{
    const department=new departmentSchema(req.body)
    department.save((err,data)=>{
        if(err)
        {
            res.status(500).json({
                message:'Data Not Added'
            })
        }
        else{
            res.status(201).json({
                message:'Data Added',
                data: data
            })
        }
    })
})
exports.getDepartment=((req,res)=>{
    departmentSchema.find((error,data)=>{
        if(error)
        {
            res.status(500).json({
                message:'Department not found'
            })
        }
        else{
            res.status(201).json({
                message:'Deparmtents found succesfully',
                data: data
            })
        }
    })
})