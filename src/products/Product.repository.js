const createModel = require('../database/Model');
const ProductSchema = require('./Product.schema');

module.exports = class ProductRepository {
  #productModel;

  constructor() {
    this.#productModel = createModel('Product', ProductSchema);
  }

  async create(product) {
    return await this.#productModel.create(product);
  }

  async findBy(textSearch) {
    return await this.#productModel.find(textSearch);
  }

  async update(id, product) {
    return await this.#productModel.findOneAndUpdate(id, product);
  }

  async delete(id) {
    return await this.#productModel.findOneAndDelete(id);
  }
}