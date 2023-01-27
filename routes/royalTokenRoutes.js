const express = require('express')
const router=express.Router()
const royalTokenController=require('../controller/royalTokenController')
router.post('/addUser',royalTokenController.addUser)
module.exports = router