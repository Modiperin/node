const mailer=require('nodemailer')
const sendMail=async(to)=>{
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
        text:'km cho',
        attachments:{
            filename:'Normal Table.pdf'
        }
    }
    transporter.sendMail(mailOptions,(err,func)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            console.log(func)
        }
    })
}
sendMail('patelyogi650@gmail.com')