const ProductRepository = require('../Product.repository');

class ProductService {
    #productRepository;

    constructor() {
        this.#productRepository = new ProductRepository();
    }

    async create(product) {
        return await this.#productRepository.create(product);
    }

    async findBy(textSearch) {
        return await this.#productRepository.findBy(textSearch);
    }

    async update(id, product) {
        return await this.#productRepository.update(id, product);
    }

    async delete(id) {
        return await this.#productRepository.delete(id);
    }
}

module.exports = new ProductService();
