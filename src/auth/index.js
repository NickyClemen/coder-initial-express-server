const loginRoute = require('./login/routes');
const logoutRoute = require('./logout/routes');
const registerRoute = require('./register/routes');

module.exports = (router) => {
  loginRoute(router);
  logoutRoute(router);
  registerRoute(router);
}
