const registerViewController = require('../controllers/registerView.controller');
const registerController = require('../controllers/register.controller');
const registerValidator = require('../middlewares/registerValidateReqBody.middleware');

module.exports = (router) => {
  router.get('/register', (req, res, next) => registerViewController(req, res, next));
  router.post(
    '/api/register',
    registerValidator,
    (req, res, next) => registerController(req, res, next),
  );
}
