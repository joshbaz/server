const Products = require('../models/products');


/*
** when accessing using file system
exports.getProducts = (req, res, next) => {
     Products.fetchAll((products => {
         res.render('shop/product-list', {
             prods: products,
             pageTitle: 'All Products',
             path: '/products'
         });
     }));
    
};
*/

// this is done using the mongodb without mongoose
exports.getProducts = (req, res, next) => {
    Products.fetchAll()
    .then(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products'
        });
    })
    .catch(err => {
        console.log(err);
    })
};

/*
** retrieve single product using file system
exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
   Products.findById(prodId, product => {
       res.render('shop/product-detail', {product: product, pageTitle: product.title, path: '/products'});
   })
};
*/

// retrieval of a file using the mongo database
// this uses mongo database
exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Products.findById(prodId)
    .then(product => {
        res.render('shop/product-detail', {
          product: product,
          pageTitle: product.title,
          path:'/products'  
        });
    })
    .catch(err => {
        console.log(err);
    })
}

/*
** works with file System
exports.getIndex = (req, res, next) => {
    Products.fetchAll((products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
        });
    }));
};
*/

// works with mongodb without mongoose
exports.getIndex = (req, res, next) => {
    Products.fetchAll()
    .then(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path:'/'
        })
    })
    .catch(err => {
        console.log(err);
    })
}
exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    console.log(prodId);
    res.redirect('/cart');
}

exports.getOrder = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout',
        
    })
}

