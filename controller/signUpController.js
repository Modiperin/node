const signUpSchema=require('../model/signUpSchema')
const OtpSchema=require('../model/OtpSchema')
const jwtToken = require('../Util/jwtTokens')
const mail=require('../Util/mailer')
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



module.exports.createUserUsingOTP=((req,res)=>{
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
                    mail(req.body.email,data._id)
                    res.json({message:'An Otp is send to your registerd Email Please confirm it'})
                    // res.status(200).json({message:'SignUp Successfully',data:data});
                }
            })
        }
    })
})


module.exports.verifyOtp=((req,res)=>{
    var Otp=req.params.Otp
    console.log(req.body)
    date=new Date()
    console.log(date)
    signUpSchema.find({"email":req.body.email},(err,data)=>{
        if(err)
        {
            res.json({message:err})
        }
        else{
            if(Otp==data[0].Otp)
            {
                console.log((date.getMinutes()-data[0].addAt.getMinutes()))
                if(date.getMinutes()-data[0].addAt.getMinutes()<=5)
                {
                    res.json({message:'You Are Successfully Registered'})
                }
                else{
                    res.json({message:'Otp Expired'})
                }
            }
            else{
                res.json({message:'Otp Invalid'})
            }
            
        }
    })
})


module.exports.getToken=((req,res)=>{
    req.body.password=hashSync(req.body.password)
    signUpSchema.create(req.body,(err,data)=>{
        if(err)
        {
            res.status(500).json({message:'Error in creating User'});
        }
        else{
            console.log(jwtToken.generateToken({name:req.body.fname,email:req.body.email,pass:req.body.password}))
            res.status(200).json({message:'SignUp Successfully',data:data});
        }
    })
})

module.exports.verifyToken=((req,res)=>{
    
    jwtToken.validateToken(req.headers.authorization)
})