const Jwt = require('../Jwt');

const dateFormat = require('../../app/DateFormat');

module.exports = async (req, res, next) => {
  const { cookies } = req;

  if (cookies && cookies.access_token) {
    const { access_token } = cookies;
    const decoded = await Jwt.verifyJwt(access_token);

    if (decoded) {
      const { exp } = decoded;

      if(dateFormat.compareDate(exp)) return next();

      res.clearCookie('access_token');
      res.redirect('/register');
    }
  }

  next({ status: 401, error_message: 'unauthorized' });
};