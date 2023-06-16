const loginViewController = require('../controllers/loginView.controller');
const loginController = require('../controllers/login.controller');
const registerValidator = require('../../middlewares/registerValidateReqBody.middleware');

module.exports = (router) => {
  router.get('/login', (req, res, next) => loginViewController(req, res, next));
  router.post('/login', registerValidator, (req, res, next) => loginController(req, res, next));
}