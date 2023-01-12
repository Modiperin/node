const express = require('express')
const router=express.Router()
const signUpController=require('../controller/signUpController')
router.post('/addUser',signUpController.createUser)
module.exports = router
