const loginSchema=require('../model/loginSchema')
const signUpSchema=require('../model/signUpSchema')
const mail=require('../Util/mailer')
const bcrypt=require('Bcrypt')

const comSync=(pass,key)=>{
    return bcrypt.compareSync(pass,key)
}

module.exports.findUser=((req,res)=>{
    pass=req.body.password
    signUpSchema.find({'email':req.body.email},(err,data)=>{
        if(err)
        {
            res.status(500).json({message:'Error in Login'})
        }
        else
        {
            if(data.length>0)
            {
                if(comSync(pass,data[0].password))
                {
                    res.status(200).json({message:"login successful"})
                }
                else{
                    res.status(200).json({message:"InCorrect Password"})
                }
            }
            else{
                res.status(200).json({message:"No User Found"})
            }
        }
    })
})