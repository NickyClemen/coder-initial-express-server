const loginViewController = require('../controllers/loginView.controller');

module.exports = (router) => {
  router.get('/login', (req, res, next) => loginViewController(req, res, next));
}