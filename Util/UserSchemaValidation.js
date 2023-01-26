const zod=require('zod');

const userSchemaValidation=zod.object({
    body:zod.object({
        name:zod.string().min(3).max(30),
        email:zod.string().email(),
        
        age:zod.number().positive().int(),
        isActive:zod.boolean()
    })
})
module.exports=userSchemaValidation