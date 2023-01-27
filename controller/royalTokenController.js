const royalTokenSchema=require('../model/royalTokenSchema')
const hashing=require('../util/HashPassword')
const driveController=require('../controller/driveController')
module.exports.addUser=((req,res)=>{
    royalTokenSchema.find({"email":req.body.email},(err,data)=>{
        if(err)
        {
            res.status(500).json({message:err})
        }
        else if(data[0]!=undefined)
        {
            res.status(200).json({message:'User already exists'})
        }
        else if(data[0]==undefined)
        {
            req.body.password=hashing.hashSync(req.body.password)
            royalTokenSchema.create(req.body,(err,data1)=>{
                if(err)
                {
                    res.status(500).json({message:err})
                }
                else{
                    res.status(200).json({message:data1})
                }
            })
        }
    })
})

module.exports.addFile=((req,res)=>{
    driveController.uploadFileDrive
})