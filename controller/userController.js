const userSchema = require('../model/userSchema')


exports.getAllUsers=((req,res)=>{
    userSchema.find((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in fetching"
            })
        }
        else{
            if(data.length==0)
            {
                res.status(404).json({
                    message:"User not found"
                })
            }
            else{
                res.status(200).json({
                    message:"Users Found",
                    data:data
                })
            }
        }
    })
})
// here the data comes directly from the database if it comes from req.body we can't get the id

exports.createUser=((req,res)=>{
    console.log(req.body)
    const user=new userSchema(req.body)
    // console.log(user)
    user.save((error,data)=>{
        if(error)
        {
            res.status(500).json({
                message:"Not not added"
            })
        }
        else
        {
            res.status(200).json({
                message:"User Added Succesfully",
                data:data
            })
        }
    })
})

exports.getUserById=((req,res)=>{
    let id=req.params.id

    userSchema.findById(id,(error,data)=>{
        if(error)
        {
            res.status(500).json({
                message:"error in finding data"
            })
        }
        else
        {
            if(id.length==24
                 )
            {
                if(data != null || data != undefined)
                {
                    res.status(200).json({
                        message:"User found successfully",
                        data:data
                })
                }
                else
                {
                    res.status(200).json({
                        message:"data not found"
                    })
                }
            }
            else
            {
                res.status(500).json({
                    message:"Incorrect Id"
                })
            }
        }
    })
})

exports.deleteUser=((req,res)=>{
    let id = req.params.id
    userSchema.findByIdAndDelete(id,(error,data)=>{
        if(error)
        {
            res.status(500).json({
                message:"error in deleting data"
            })
        }
        else{
            if(data != null || data != undefined)
            {
                res.status(200).send()
            }
            else
            {
                res.status(200).send('Data Not Found')
            }
        }
    })
})

exports.updateUser=((req,res)=>{
    let id=req.params.id
    try{
        if(req.body._id)
        {
            throw new Error("user id can't be changed")
        }
        else{
            userSchema.findByIdAndUpdate(id,req.body,(error,data)=>{
                if(error)
                {
                    res.status(500).json({
                        message:"Error in updating data"
                    })
                }
                else{
                    res.status(200).json({
                        message:"Data Updated",
                        data:data
                    })
                }
            })
        }
    }
    catch(error)
    {
        res.status(400).json({
            message:error.message
        })
    }
})