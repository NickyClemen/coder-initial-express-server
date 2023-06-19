const productsView = require('./routes/products.router');

module.exports = (router) => {
  productsView(router);
}