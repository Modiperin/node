const jwt=require('jsonwebtoken');
const secret='Bearer secret'
const ip=['127.0.0.1','127.0.10.20','192.168.3.24']
const count=0
const generateToken=(user)=>{
    jwt.sign(user, secret.split(" ")[1],{
        expiresIn:'0.01h',


    },(err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            console.log('You are good to go')
            console.log(data)
        }
    })
}
// generateToken({userId:1,name:'Perin',ipAddress:'192.168.3.24',count:0})

const validateToken=(token)=>{
    jwt.verify(token,secret.split(" ")[1],(err,user)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            if(ip.includes(user.ipAddress))
            {
                console.log(user.count=user.count+1)
                if(user.count>10)
                {
                    console.log('Maximum limit reached in an hour')
                }
                else{
                    console.log('Welcome Onboard')
                }
            }
        }
    })
}
// generateToken({userId:1,name:'Perin',ipAddress:'192.168.3.24',count:0})
validateToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJQZXJpbiIsImlwQWRkcmVzcyI6IjE5Mi4xNjguMy4yNCIsImNvdW50IjowLCJpYXQiOjE2NzQyMTIzMDksImV4cCI6MTY3NDIxMjM0NX0.hsAxlUkNiYYnH71xcWFPJLwLtw8IiPr05OrqzNgKOyY')