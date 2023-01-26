const express = require('express')
const router=express.Router()
const loginController=require('../controller/loginController')
const generateToken = require('../controller/generateToken')
router.post('/loginUser',loginController.findUser)
router.post('/token',generateToken.postData)
module.exports = router