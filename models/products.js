//when saving to a file
const fs = require('fs');
//path importation
const path = require('path');

const pathD = path.join(path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);
//refactoring
const getProductsFromFile = (cb) => {
    
    fs.readFile(pathD, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        else {
            cb(JSON.parse(fileContent));
        }  
    });   
}

module.exports = class Product {
    constructor(Title, ImageUrl, Description, Price) {
        this.title = Title;
        this.imageUrl = ImageUrl;
        this.description= Description;
        this.price = Price;
    }

    save() {
       getProductsFromFile( products => {
           //new product
           products.push(this);
           fs.writeFile(pathD, JSON.stringify(products), err => {
               console.log(err);
           })
       });
    }
    //callback function is used : cb
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}