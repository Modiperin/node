const jwt=require('jsonwebtoken');
const secret='Bearer secret'
const validate =  async(req,res,next)=>{
    console.log('missing')
    try
    {
        for(var i=0;i<req.body.ApiDet.length;i++)
        {
            // console.log(req.body.ApiDet[i].ApiId)
            // genToken.generateToken({name:req.body.name,email:req.body.email,ApiId:req.body.ApiDet[i].ApiId},req.body.ApiDet[i].expiresIn)
            jwt.sign({name:req.body.name,email:req.body.email,ApiId:req.body.ApiDet[i].ApiId}, secret.split(" ")[1],{
                expiresIn:'2.5h',
            },(err,data)=>{
                if(err)
                {
                    console.log(err)
                }
                else{
                    console.log(data)
                    req.body.ApiDet[i].token= data
                }
            })
        }
        return next()
    }
    catch(err)
    {
        return res.status(500).json({
            message:err.errors
        })
    }
}
module.exports={validate}