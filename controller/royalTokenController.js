const royalTokenSchema=require('../model/royalTokenSchema')
const hashing=require('../util/HashPassword')
const driveController=require('../controller/driveController')
const royalWalletSchema=require('../model/royalWalletSchema')
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
                            updateUser(req.params.id,req.file.size,data.spaceUsed,req.file.filename)
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

function updateUser(id,size,spaceUsed,dataAdded)
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
    royalTokenSchema.findOneAndUpdate({"_id":id},{$push:{"dataAdded":dataAdded}},{new:true},(err,data)=>{
        if(err)
            {
               console.log('err is pushing')
            }
            else{
                console.log('data Added',data)
            }
    })
}

async function getSize(req){
    let data=await royalTokenSchema.findOne({"_id":req.params.id})
    return data
}

exports.addWallet=((req,res)=>{
    royalWalletSchema.find({"email":req.body.email},(err,data)=>{
        if(data.length>0)
        {
            res.status(200).json({message:'User Already Registered'})
        }
        else{
            royalWalletSchema.create(req.body,(err,data)=>{
                if(err)
                {
                    res.status(500).json({message:'Error in creating User'});
                }
                else{
                    res.json({message:'Wallet Create Successfully'})
                    // res.status(200).json({message:'SignUp Successfully',data:data});
                }
            })
        }
    })
})

async function getToken(req){
    let data=await royalWalletSchema.findOne({"_id":req.params.id})
    return data
}

async function getSizeEmail(req){
    let data=await royalTokenSchema.findOne({"email":req.body.email})
    return data
}

exports.buyStorage=((req,res)=>{
    getToken(req).then((data)=>{
        token=parseInt(data.token)-parseInt(req.body.storage)
        console.log(token)
        if(token>=0)
        {
            console.log('update in token')
            royalWalletSchema.updateOne({"email":req.body.email},{"token":parseInt(data.token)-parseInt(req.body.storage)},(err,data1)=>{
                if(err)
                res.status(500).json({message:'Error in updating Wallet'});
                else
                console.log(data1)
            })
            getSizeEmail(req).then((data2)=>{
                royalTokenSchema.updateOne({"email":req.body.email},{"allotedSpace":parseInt(data2.allotedSpace)+parseInt(req.body.storage)},(err,data2)=>{
                    if(err)
                    res.status(500).json({message:'Error in updating Wallet'});
                    else
                    res.status(500).json({message:data2});
                })
                // res.status(200).json({message:'You Have Successfully purchase the storage Enjoy.........'})
            }).catch((err)=>{
                console.log(err)
            })
        }
        else{
            res.status(200).json({message:'You Have No more tokens to puchase the storage'})
        }
    }).catch((err)=>{
        console.log(err);
    })
})