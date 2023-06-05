const Product = require('../models/Product.model');
const FileManager = require('./FileManager');
const errorMessage = require("../../errorMessage");

class ProductService {
    #products;
    #fileManager;

    constructor(path) {
        this.#fileManager = new FileManager(path);
        this.#products = this.#fileManager.readFile();
    }

    getProducts() {
        return this.#products;
    }

    async addProduct(product) {
        try {
            const newProduct = new Product({
                id: 1,
                ...product,
            });

            this.#products.push(newProduct);
            await this.#fileManager.writeFile(this.#products);

            return product.id;
        } catch (error) {
            return error.message;
        }
    }

    getById(id) {
        this.#products.find((product) => product.id === id);
    }

    async updateProduct(id, product) {
        const productsIndex = this.#products.findIndex((product) => product.id === id);

        if (productsIndex !== -1) {
            throw new Error(errorMessage.NOT_FOUND);
        }

        const updateProduct = {...this.#products[productsIndex], ...product};
        await this.#fileManager.writeFile(this.#products);

        this.#products.splice(productsIndex, 1, updateProduct);
    }

    async deleteById(id) {
        try {
            this.#products = this.#products.filter((product) => product.id !== id);

            await this.#fileManager.writeFile(this.#products);
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = ProductService;


