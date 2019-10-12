const path = require('path');
const express = require('express');


const router = express.Router();
const adminData = require('./admin');

//the use helps us to add a middleware function
router.get('/', (req, res, next) => {
    //importing the products from adminjs
    const products = adminData.products;
    //this returning the html shop pug page
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop', 
        path: '/',
        hasProducts: products.length > 0,
        activeShop:true,
        productCSS: true
    });
});
module.exports = router;
