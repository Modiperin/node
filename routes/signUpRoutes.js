const express = require('express')
const router=express.Router()
const signUpController=require('../controller/signUpController')
router.post('/addUser',signUpController.createUser)
router.post('/addUserOTP',signUpController.createUserUsingOTP)
router.get('/verifyOtp/:Otp',signUpController.verifyOtp)
router.post('/generateToken',signUpController.getToken)
router.get('/verifyToken',signUpController.verifyToken)
module.exports = router
