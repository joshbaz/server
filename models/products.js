const products = [];

module.exports = class Product {
    constructor(Title) {
        this.title = Title;
    }

    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
}