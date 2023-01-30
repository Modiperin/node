const royalTokenSchema=require('../model/royalTokenSchema')
const hashing=require('../util/HashPassword')
const driveController=require('../controller/driveController')
const multer=require('multer')
const googleUploadController=require('../controller/googleUploadController')
const storage=multer.diskStorage({
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload1=multer({
    storage:storage,
    limits:{filesize:100000},
}).single('file')
console.log(upload1)
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
var types=['application/pdf','image/jpeg','image/png']
exports.addFile=((req,res)=>{
    var x=null
    upload1(req,res,(err)=>{
        if(types.includes(req.file.mimetype))
        {
            if(err){
                res.status(400).json({message:"Some error occuerd"});
            }
            else{
                if(req.file==undefined)
                {
                    message = "Some error occuerd"
                }
                else{
                    console.log(req.file)
                    getSize(req).then((data)=>{
                        var spaceused=parseFloat(data.spaceUsed+( req.file.size/ 1024000).toFixed(2))
                        if(spaceused>data.allotedSpace)
                        {
                            res.status(200).json({message:"You are Out of Storage"})
                        }
                        else if(Number(spaceused)<=data.allotedSpace)
                        {
                            updateUser(req.params.id,req.file.size,data.spaceUsed)
                            googleUploadController.uploadFile(req.file.path)
                            res.status(200).json({message:"File uploaded",file:`uplaods/${req.file.filename}`});
                            console.log('data')
                        }
                    }).catch((err)=>{
                        console.log(err)
                    })

                }
            }
        }
        else{
            res.status(200).json({message:"file Type Not allowed"})
        }

    })
})

function updateUser(id,size,spaceUsed)
{
    royalTokenSchema.updateOne({"_id":id},{"spaceUsed":spaceUsed+( size/ 1024000)},(err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            console.log(data)
        }
    })
}

async function getSize(req){
    let data=await royalTokenSchema.findOne({"_id":req.params.id})
    return data
}

