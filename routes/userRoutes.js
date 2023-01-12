const userController= require('../controller/userController')
const express = require('express')
const router=express.Router()

const zodMiddleware = require('../middleware/ZodMiddleWare')
const userSchemaValidation = require('../Util/userSchemaValidation')
router.get('/userData',userController.getAllUsers)
router.post('/addUser',zodMiddleware.validate(userSchemaValidation),userController.createUser)
router.get('/user/:id',userController.getUserById)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)
module.exports=router;