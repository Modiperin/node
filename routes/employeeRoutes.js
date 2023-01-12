const express = require('express');
const routes=express.Router()
const employeeController=require('../controller/employeeController')
routes.post('/addEmp',employeeController.addEmployee)
routes.get('/getEmployee',employeeController.getEmployee)
module.exports=routes