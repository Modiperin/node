const testController= require('../controller/testController.js');
const express= require('express');
const router= express.Router();
router.get('/t',testController.testApi)

module.exports=router