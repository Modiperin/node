const ComEmployeesSchema=require('../model/ComEmployeeSchema')
const departmentSchema=require('../model/DepartmentSchema')

exports.addEmployee=((req, res)=>{
    const employee=new ComEmployeesSchema(req.body)
    employee.save((error,data)=>{
        if(error)
        {
            res.status(500).json({message:'Error saving employee'})
        }
        else{
            res.status(201).json({message:'Added employee',data:data})
        }
    }) 

    // deptId=req.params.
})
exports.getEmployee=((req,res)=>{
    // ComEmployeesSchema.find((error,data)=>{
    //     if(error){
    //         res.status(500).json({message:'Error'})
    //     }
    //     else{
    //         res.status(200).json({
    //             message:'Data Fetched Successfully',
    //             data:data
    //         })
    //     }
    // })
    // by this we gets only the department_id of that employee
    ComEmployeesSchema.find({empName:'jay'}).populate('department').exec((error,data)=>{
        if(error){
            res.status(500).json({message:'Error'})
        }
        else{
            res.status(200).json({
                message:'Data Fetched Successfully',
                data:data
            })
        }
    })
})