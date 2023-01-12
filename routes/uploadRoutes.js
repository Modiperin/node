const express = require('express');
const routes=express.Router()
const uploadController=require('../controller/uploadController')
routes.post('/uploadFile', uploadController.uploadFile)
module.exports=routes