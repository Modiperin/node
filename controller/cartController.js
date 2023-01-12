const cartSchema=require('../model/cartSchema')

exports.addCart=((req,res)=>{
    const cart=new cartSchema(req.body)
    cart.save((error,data)=>{
        if(error){
            res.status(500).json({
                message:'Error in adding to cart'
            })
        }
        else{
            res.status(201).json({
                message:'Added to cart',
                data:data
            })
        }
    })
})

// exports.getCart=((req,res)=>{
//     cartSchema.find().populate('user').populate('products').exec((error,data)=>{
//         if(error)
//         {
//             res.status(400).json({
//                 message:'Unable to find the cart'
//             })
//         }
//         else
//         {
//             res.status(200).json({
//                 message:'Cart found',
//                 data:data
//             })
//         }
//     })
// })

exports.getCart = (req,res)=>{

    cartSchema.find().populate('user').populate('products').exec((err,data)=>{
        if(err){
            res.status(400).json({
                message:'unable to find the cart'
            })
        }
        else{
            res.status(200).json({
                data:data,
                message:"Cart details fetched"
            })
        }

    })
}