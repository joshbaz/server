const path = require('path');
const express = require('express');
const Router = express.Router();
const rootDir = require('../util/path');

const products = [];

Router.get('/addproduct', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addproduct.html'));
});

Router.post('/product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect("/");
});

exports.routes = Router;
exports.products = products;