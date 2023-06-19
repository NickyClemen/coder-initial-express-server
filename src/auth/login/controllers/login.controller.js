const passport = require('passport');

module.exports = async (req, res, next) => {
  passport.authenticate(
    'login',
    { session: false },
    async (err, accessToken) => {
      if (err) return res.redirect('/register');

      res.cookie('access_token', accessToken);
      res.redirect('/products');
    },
  )(req, res, next);
};
