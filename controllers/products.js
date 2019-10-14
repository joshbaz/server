const products = [];


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
    products.push({ title: req.body.title });
    res.redirect("/");
}

exports.getProducts = (req, res, next) => {
    //this returning the html shop pug page
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
}