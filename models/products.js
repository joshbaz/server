/*
** this is done when having a file system
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
    constructor(Title, ImageUrl, Price, Description) {
        this.title = Title;
        this.imageUrl = ImageUrl;
        this.description= Description;
        this.price = Price;
    }

    save() {
        //generation of a random id for the product
        this.id = Math.random().toString();
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

    static findById(id, cb){
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }
}

*/

/*
** since we are using the getdb to connect to accesss
** we need to import it in this manner
*/
const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;
class Product {
    constructor(title, price, description, imageUrl) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    save() {
        /*
        ** we first get access to the database by calling the fuction below
        */
       const db = getDb();
       /*
       ** after the access then we run the collection to which the constructor falls
       ** if it doesnot exist it will be created automatically
       ** the return helps us to implement a .then in the postaddproduct and also the redirect
       */
      return db.collection('products')
      .insertOne(this)
      .then(result => {
          console.log(result);
      })
      .catch(err => {
          console.log(err);
      });
    }
    // fetching all the data that we need
    static fetchAll() {
        const db = getDb();
        // the db is returned because innorder to interact with the mongodb database 
        //toarray turns all the documents into a javaScript object
        //Note better to do pagination
        //after the toarray implementation- then a promise is returned
        return db
        .collection('products')
        .find()
        .toArray()
        .then(products => {
            console.log(products);
            return products;
        })
        .catch(err => {
            console.log(err);
        });
    }

    // Accessing a single product
    static findById(prodId) {
        const db = getDb();
        return db.collection('products')
        .find({_id: new mongodb.ObjectId(prodId)})
        .next()
        .then(product => {

            console.log(product);
            return product;
        } )
        .catch(err => {
            console.log(err);
        })
    }
}

module.exports = Product;