const Products = require('../models/products');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/addproduct', {
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
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products',
        });
    }));
}