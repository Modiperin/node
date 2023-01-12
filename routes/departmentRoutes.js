const express = require('express');
const routes=express.Router()
const departmentController=require('../controller/departmentController')
routes.post('/addDept',departmentController.addDepartment)
routes.get('/getDepartment',departmentController.getDepartment)
module.exports=routes