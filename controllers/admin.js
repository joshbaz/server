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
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Products(title, imageUrl, price, description);
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