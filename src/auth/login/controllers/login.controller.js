const passport = require('passport');

const config = require('../../../../config');

module.exports = async (req, res, next) => {
  passport.authenticate(
    'login',
    { session: false },
    async (err, accessToken) => {
      if (err) return res.redirect('/register');

      res.cookie(
        'access_token',
        accessToken,
        {
          maxAge: 60 * 60 * 1000,
          httpOnly: true,
          secure: true ? config.NODE_ENV === 'production' : false,
          sameSite: true,
        }
      );
      res.redirect('/products');
    },
  )(req, res, next);
};
