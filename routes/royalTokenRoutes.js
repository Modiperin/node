const express = require('express')
const router=express.Router()
const royalTokenController=require('../controller/royalTokenController')
router.post('/addUser',royalTokenController.addUser)
router.post('/addFile/:id',royalTokenController.addFile)
module.exports = router