const path = require('path');
const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products')


//the use helps us to add a middleware function
router.get('/', productsController.getProducts);
module.exports = router;
