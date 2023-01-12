const productSchema=require('../model/productSchema')

exports.addProduct=((req,res)=>{

    const product=new productSchema(req.body)
    product.save((error,data)=>{
        if(error){
            res.status(500).json({
                message:'Error in saving data'
            })
        }
        else{
            res.status(201).json({
                message:'Data saved successfully',
                data:data
            })
        }
    })
})

exports.getProduct=((req,res)=>{
    productSchema.find((error,data)=>{
        if(error)
        {
            res.status(400).json({
                message:'Unable to find the product'
            })
        }
        else
        {
            res.status(200).json({
                message:'Product found',
                data:data
            })
        }
    })
})