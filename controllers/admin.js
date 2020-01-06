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

/*
****** this function runs when using the file system ***
exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Products(title, imageUrl, price, description);
    product.save();
    res.redirect("/");
}

*/

/*
** similar to the above commented function
** difference is that it performs with mongo
*/
exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Products(title, price, description, imageUrl);
    product
    .save()
    .then(result => {
       // console.log(result);
        console.log('Product created');
        res.redirect('/admin/products');
    })
    .catch(err => {
        console.log(err);
    })
}

/*
exports.getProducts = (req, res, next) => {
    Products.fetchAll((products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products',
        });
    }));
}
*/

exports.getProducts = (req, res, next) => {
    Products.fetchAll()
    .then(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path:'/admin/products'
        });
    })
    .catch(err => console.log(err));

};