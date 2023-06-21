const productsView = require('./Product.router');

module.exports = (router) => {
  productsView(router);
}