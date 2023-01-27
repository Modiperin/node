const mailer=require('nodemailer')
const signUpSchema=require('../model/signUpSchema')
var OTP=(Math.floor(Math.random()*10000))
async function apicall2(to,Otp,id)
    {
        date=new Date()
        signUpSchema.updateOne({"email":to},{"Otp":Otp,"addAt":date},(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(data)
            }
        })
    }
const sendMail=async(to,id)=>{
    let transporter=mailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:"modiperin@gmail.com",
            pass:'inwqgazfdslhwnah'
        }
    })

    const mailOptions={
        from:'modiperin@gmail.com',
        to:to,
        subject:"tesnt Mail1",
        text:'Your Otp is:'+OTP
        // attachments:{
        //     filename:'Normal Table.pdf'
        // }
    }
    transporter.sendMail(mailOptions,(err,func)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            console.log(func)
            console.log(to)
            apicall2(to,OTP,id)
            
        }
    })
}
// sendMail('patelyogi650@gmail.com')
module.exports=sendMail