const loginViewController = require('../controllers/loginView.controller');
const loginController = require('../controllers/login.controller');

const loginValidator = require('../middlewares/loginValidateReqBody.middleware');

module.exports = (router) => {
  router.get('/login', (req, res, next) => loginViewController(req, res, next));
  router.post(
    '/api/login',
    loginValidator,
    (req, res, next) => loginController(req, res, next),
  );
}
