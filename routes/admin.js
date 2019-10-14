const path = require('path');
const express = require('express');
const Router = express.Router();
const productsController = require('../controllers/products')


Router.get('/addproduct', productsController.getAddProduct );

Router.post('/product', productsController.postAddProduct);

module.exports = Router;