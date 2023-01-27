const jwt=require('jsonwebtoken');
const secret='Bearer secret'
// console.log(secret.split(" ")[1])
// var y;
module.exports.generateToken=(user)=>{
    jwt.sign(user, secret.split(" ")[1],{
        expiresIn:'2.5h',


    },(err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            console.log('You are good to go')
            console.log(data)
            return data;
        }
    })
}
// generateToken({userId:1,name:'Perin'})
// module.exports= y;

module.exports.validateToken=(token)=>{
    jwt.verify(token,secret.split(" ")[1],(err,user)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            // console.log('You are good to go')
            console.log(user)
        }
    })
}
// validateToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJQZXJpbiIsImlhdCI6MTY3NDA0MjI5MywiZXhwIjoxNjc0MDUxMjkzfQ.ynu0Kt-yDfXADTZOrMokHR99zxIrfoChdsT53lR-woo')