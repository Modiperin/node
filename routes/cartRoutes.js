const express = require('express');
const router=express.Router()

const cartController = require('../controller/cartController');
router.post('/addCart',cartController.addCart)
router.get('/getCart', cartController.getCart)
module.exports = router