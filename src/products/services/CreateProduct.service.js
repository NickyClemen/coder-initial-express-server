class CreateProductService {
  #productService;

  constructor() {
    this.#productService = require('./Product.service');
  }

  async execute(product) {
    try {
      const newProduct = await this.#productService.create(product);

      if (newProduct) return newProduct.id;
      return newProduct;
    } catch (err) {
      return { error_message: err.meesage };
    }

  }
}

module.exports = new CreateProductService();
