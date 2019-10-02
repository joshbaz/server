const path = require('path');
const express = require('express');
const Router = express.Router();

const rootDir = require('../util/path');

Router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addproduct.html'));
});

Router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = Router;