const path = require('path');
const express = require('express');
const Router = express.Router();
const adminController = require('../controllers/admin')


Router.get('/addproduct', adminController.getAddProduct );

Router.get('/products', adminController.getProducts);

Router.post('/product', adminController.postAddProduct);

module.exports = Router;