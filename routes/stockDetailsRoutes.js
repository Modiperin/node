const express = require('express');
const router=express.Router()
const examSchema=require('../controller/stockDetailsController')
// const authentication = require('../MiddleWare/AuthMiddleWare')
router.post('/addStock',examSchema.createStock)
router.get('/getStock/:shortName',examSchema.getStockDetails)
// router.post('/removeQuestion/:Id',examSchema.pullQuestion)
// router.post('/addQuestion/:Id',examSchema.pushQuestion)
module.exports=router