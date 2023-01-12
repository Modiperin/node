const signUpSchema=require('../model/signUpSchema')
const bcrypt=require('Bcrypt')
const saltRound=10

const hashSync=(pass)=>{
    return bcrypt.hashSync(pass,saltRound)
}

module.exports.createUser=((req,res)=>{
    signUpSchema.find({"email":req.body.email},(err,data)=>{
        if(data.length>0)
        {
            res.status(200).json({message:'User Already Registered'})
        }
        else{
            req.body.password=hashSync(req.body.password)
            signUpSchema.create(req.body,(err,data)=>{
                if(err)
                {
                    res.status(500).json({message:'Error in creating User'});
                }
                else{
                    res.status(200).json({message:'SignUp Successfully',data:data});
                }
            })
        }
    })
    // console.log(req.body)
    
})