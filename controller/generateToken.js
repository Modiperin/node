const jwt=require('jsonwebtoken');
const signUpSchema=require('../model/signUpSchema')
const secret='Bearer secret'
const generateToken=async(user)=>{
    jwt.sign(user, secret.split(" ")[1],{
        expiresIn:'0.01h',


    },(err,data)=>{
        if(err)
        {
           return err
        }
        else{
            console.log('You are good to go')
            return data
        }
    })
}
exports.postData=((req,res)=>{
    signUpSchema.create(req.body,(err,data)=>{
        if(err)
        {
            res.status(500).json({message:'error in crateing'})
        }
        else{
            // var token=generateToken(req.body)
            generateToken(req.body).then(user=>{
                var token=user
                console.log(token)
            }).catch(err=>{
                console.log('error')
            })
        }
    })
})
