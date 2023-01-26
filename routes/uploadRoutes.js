const express = require('express');
const routes=express.Router()
const uploadController=require('../controller/uploadController')
const driveController=require('../controller/driveController')
routes.post('/uploadFile', uploadController.uploadFile)
routes.post('/uploadFileDrive', driveController.uploadFileDrive)
module.exports=routes