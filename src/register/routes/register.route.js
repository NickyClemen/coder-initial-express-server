const passport = require('passport');

const registerViewController = require('../controllers/registerView.controller');
const registerValidator = require('../middlewares/registerValidateReqBody.middleware');

module.exports = (router) => {
  router.get('/register', (req, res, next) => registerViewController(req, res, next));
  router.post(
    '/api/register',
    registerValidator,
    passport.authenticate(
      'register',
      {
        success: '/login',
      },
    ),
  );
}