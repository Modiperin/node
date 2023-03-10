const express=require('express')
const app = express()
const cors = require('cors')
const mongoose=require('mongoose')
const testRoutes=require('./routes/testRoutes')
const userRoutes=require('./routes/userRoutes')
const employeeRoutes=require('./routes/employeeRoutes')
const deptRoutes=require('./routes/departmentRoutes')
const productRoutes=require('./routes/productRoutes')
const testController = require('./controller/testController')
const cartRoutes=require('./routes/cartRoutes')
const uploadRoutes=require('./routes/uploadRoutes')
const signUpRoutes=require('./routes/signUpRoutes')
const loginRoutes=require('./routes/loginRoutes')
const royalTokenRoutes=require('./routes/royalTokenRoutes')
const apiUserRoutes=require('./routes/apiUserRoutes')
const stockRaoutes=require('./routes/stockDetailsRoutes')
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(cors())
require('dotenv').config()
app.use('/test',testRoutes)
app.use('/testDb',userRoutes)
app.use('/employee',employeeRoutes)
app.use('/department',deptRoutes)
app.use('/product',productRoutes)
app.use('/cart',cartRoutes)
app.use('/upload',uploadRoutes)
app.use('/signUp',signUpRoutes)
app.use('/login',loginRoutes)
app.use('/royalSignUp',royalTokenRoutes)
app.use('/api',apiUserRoutes)
app.use('/stock',stockRaoutes)
// app.get('/testApi',(req,res)=>{
    //     res.send('tesint through main') 
    // })
    
    // mongoose.connect('mongodb+srv://perin:perin123@cluster0.0i6pak5.mongodb.net/club5?retryWrites=true&w=majority',{
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true,
    // },(err)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log("DB connected");
    //     }
    // })

    mongoose.connect('mongodb://127.0.0.1:27017/club5',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("DB connected");
        }
    })
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})


// MVC
// m-model-database/schema
// v-view-bean 
// c-controller-login/servlet

//app.js-basic
//routes
// controller
//model



// /user->get,post,delet,getOneuse,getById,uodate