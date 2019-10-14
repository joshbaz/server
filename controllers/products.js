const Products = require('../models/products');

exports.getAddProduct =(req, res, next) => {
    res.render('addproduct', {
        pageTitle: 'Add Product',
        path: '/admin/addproduct',
        activeAddProduct: true,
        productCSS: true,
        formsCSS: true
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Products(req.body.title);
    product.save();
    res.redirect("/");
}

exports.getProducts = (req, res, next) => {
     Products.fetchAll((products => {
         res.render('shop', {
             prods: products,
             pageTitle: 'Shop',
             path: '/',
             hasProducts: products.length > 0,
             activeShop: true,
             productCSS: true
         });
     }));
    
}