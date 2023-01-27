const apiUserSchema=require('../model/apiUserSchema')
const apiSchema=require('../model/apiSchema')
const hashing=require('../util/HashPassword')
const genToken=require('../util/jwtTokens')
const jwt=require('jsonwebtoken');
const secret='Bearer secret'

// const updateUser=(email,token){
//     apiUserSchema.find({"email":email},(err,data)=>{
//         if(err)
//         {
//             console.log(err)
//         }
//         else
//         {
//             console.log(data)
//         }
//     })
// })
function updateUser(email,token){
    apiUserSchema.updateOne({"email":email},{"ApiDet":[{"token":token}]},(err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            console.log(data)
        }
    })
}

module.exports.addUser=((req,res)=>{
    apiUserSchema.find({"email":req.body.email},(err,data)=>{
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
            // req.body.password=hashing.hashSync(req.body.password)
            apiUserSchema.create(req.body,(err,data1)=>{
                if(err)
                {
                    res.status(500).json({message:err})
                }
                else{
                    res.status(200).json({message:data1})
                    // console.log(req.body.ApiDet)
                    for(var i=0;i<req.body.ApiDet.length;i++)
                    {
                        console.log(req.body.ApiDet[i].ApiId)
                        // var x=genToken.generateToken({name:req.body.name,email:req.body.email,ApiId:req.body.ApiDet[i].ApiId},req.body.ApiDet[i].expiresIn)
                        jwt.sign({name:req.body.name,email:req.body.email,ApiId:req.body.ApiDet[i].ApiId}, secret.split(" ")[1],{
                            expiresIn:req.body.ApiDet[i].expiresIn,
                        },(err,data)=>{
                            if(err)
                            {
                                console.log(err)
                            }
                            else{
                                console.log(data)
                                updateUser(req.body.email,data)
                            }
                        })
                    }
                }
            })
        }
    })
})



module.exports.addApi=((req,res)=>{
    apiSchema.create(req.body,(err,data1)=>{
        if(err)
        {
            res.status(500).json({message:err})
        }
        else{
            res.status(200).json({message:data1})
        }
    })
})

