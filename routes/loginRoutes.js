const express = require('express')
const router=express.Router()
const loginController=require('../controller/loginController')
router.post('/loginUser',loginController.findUser)
module.exports = router