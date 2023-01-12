const multer=require('multer')
// const path=require('path')
//storage->destination and filename
const storage=multer.diskStorage({
    destination:'./uploads',
    filename:function(req,file,cb){
        cb(null,file.originalname)
        // here we can write file.filename and .originalname or else concate any other thing to it
    }
})

const upload1=multer({
    storage:storage,
    limits:{filesize:100000},
    // filefilter:filefilter

}).single('file')
console.log(upload1)
// here we can use any,single,fields,none,array
// form data in which form fields are returned
//  while in multipart data a whole file is returned int the form of bits
// none->text/plain

exports.uploadFile=((req,res)=>{
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
            }
        }

    })
})
// here this error comes from upload as the callback
