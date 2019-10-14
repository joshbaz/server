//when saving to a file
const fs = require('fs');
//path importation
const path = require('path');


module.exports = class Product {
    constructor(Title) {
        this.title = Title;
    }

    save() {
        //products.push(this);
        const pathD = path.join(path.dirname(process.mainModule.filename), 
        'data', 
        'products.json');
        //reading the file
        fs.readFile(pathD, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            //pushing the product into the array
            products.push(this);

            fs.writeFile(pathD, JSON.stringify(products), (err) => {
                console.log(err);
            });

        });
    }
    //callback function is used : cb
    static fetchAll(cb) {
        const pathD = path.join(path.dirname(process.mainModule.filename),
            'data',
            'products.json');
        fs.readFile(pathD, (err, fileContent) => {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });   
    }
}