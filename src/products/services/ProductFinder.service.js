class CreateProductService {
  #productService;

  constructor() {
    this.#productService = require('./Product.service');
  }

  async execute(textSearch) {
    try {
      const products = await this.#productService.findBy(textSearch);

      if (products.length === 0) return undefined;
      return products;
    } catch (err) {
      return { error_message: err.meesage };
    }

  }
}

module.exports = new CreateProductService();
