const zod=require('zod');

const userSchemaValidation=zod.object({
    body:zod.object({
        name:zod.string().min(3).max(30),
        email:zod.string().email(),
        password:zod.string({
            required_error: "PassWOrd is Compulsory",
            invalid_type_error: "Password must be a string",
        }).min(5,{message:'password must be between 5 to 15 characetrs'}).max(15),
        age:zod.number().positive().int(),
        isActive:zod.boolean()
    })
})
module.exports=userSchemaValidation