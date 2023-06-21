const logoutController = require('../controllers/logout.controller');

module.exports = (router) => {
  router.post(
    '/api/logout',
    (req, res, next) => logoutController(req, res, next),
  );
}