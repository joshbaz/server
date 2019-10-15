const path = require('path');
const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop')


//the use helps us to add a middleware function
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
