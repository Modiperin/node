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

exports.uploadFileDrive=((req,res)=>{
    upload1(req,res,(err)=>{
        if(err){
            res.status(400).json({message:"Some error occuerd"});
        }
        else{
            if(req.file==undefined)
            {
                message = "Some error occuerd"
            }
            else{
                res.status(200).json({message:"File uploaded",file:`uplaods/${req.file.filename}`});
                var x=googleUploadController.uploadFile(req.file.path)
            }
        }

    })
})
