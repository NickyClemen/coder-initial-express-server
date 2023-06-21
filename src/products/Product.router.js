const createProductMiddleware = require('./middlewares/CreateProduct.middleware');
const getProductByIdMiddleware = require('./middlewares/GetProductById.middleware');

const productsViewController = require('./controllers/ProductView.controller');
const productsController = require('./controllers/Products.controller');
const productByIdController = require('./controllers/ProductById.controller');
const createProductController = require('./controllers/NewProduct.controller');

module.exports = (router) => {
  router.get(
    '/products',
    (req, res, next) => productsViewController(req, res, next),
  );

  router.get(
    '/api/products',
    (req, res, next) => productsController(req, res, next),
  );

  router.get(
    '/api/products/:id',
    getProductByIdMiddleware,
    (req, res, next) => productByIdController(req, res, next),
  );

  router.post(
    '/api/products/new-product',
    createProductMiddleware,
    (req, res, next) => createProductController(req, res, next),
  );
}