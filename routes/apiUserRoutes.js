const express=require('express')
const router=express.Router()
const apimiddleware=require('../controller/apimiddleware')
const apiUserController=require('../controller/apiUserController')
// router.post('/addUser',apimiddleware.validate,apiUserController.addUser)
router.post('/addUser',apiUserController.addUser)
router.post('/addApi',apiUserController.addApi)
module.exports=router