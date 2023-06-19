const productsViewController = require('../controllers/productsView.controller');

module.exports = (router) => {
  router.get('/products', (req, res, next) => productsViewController(req, res, next));
}