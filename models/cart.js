//importation of the file system
//this is done due to the access of the file that was created in json formart
const fs = require('fs');
//path importation
const path = require('path');

// creation of the file in the data directory for the cart json data
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class Cart {
    //this is done due to the cart being constant
    static addProduct(id) {
        //fetch the previous cart
         fs.readFile(p, (err, fileContent) => {
             //creation of cart
             let cart = { products: [], totalPrice: 0};
             if (!err) {
                 cart = JSON.parse(fileContent);
             }
             //Analyze the cart => Find the existing Product
             const existingProduct= cart.products.find(prod => prod.id === id);
             //creation of a new product when existing is found
             let updatedProduct;
             if (existingProduct) {
                // all the properties of the existing product are carried forward into the updated one
                //and transfered to a new javaScript object
            updatedProduct = {...existingProduct}; 
            //increament of the old quantity of the products
            updatedProduct.qty = updatedProduct.qty + 1;
             } else {
                 updatedProduct = { id: id, qty: 1}
                 cart.products = [...cart.products, updatedProduct];
             }
             cart.totalPrice = cart.totalPrice + productPrice;
             
         })
        

        //Add new product/ increase quantity
    }
}