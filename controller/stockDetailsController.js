const stockDetailsSchema = require('../model/stockDetailsSchema')
exports.createStock=((req,res)=>{
    console.log(req.body)
    const user=new stockDetailsSchema(req.body)
    // console.log(user)
    user.save((error,data)=>{
        if(error)
        {
            res.status(500).json({
                message:"Stock not added"
            })
        }
        else
        {
            res.status(200).json({
                message:"Stock Created Succesfully",
                data:data
            })
        }
    })
})
async function getSize(shortName){
    let data=await stockDetailsSchema.findOne({"shortName":shortName})
    return data
}

exports.getStockDetails=((req,res)=>{
    getSize(req.params.shortName).then((data)=>{
        console.log(data.shortName)
        res.send(data)
    }).catch((error)=>{
        console.log(error)
    })
})
