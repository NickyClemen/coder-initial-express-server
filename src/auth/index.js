const loginRouter = require('./login/routes');
const registerRoute = require('./register/routes/register.route');

module.exports = (router) => {
  registerRoute(router);
  loginRouter(router);
}
