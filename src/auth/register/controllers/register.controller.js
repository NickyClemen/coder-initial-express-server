const passport = require('passport');

module.exports = async (req, res, next) => {
  passport.authenticate(
    'register',
    { session: false },
    (err, newUser) => {
      if (err) return next(err);

      // return res.status(200).json(newUser);
      res.redirect('/login');
    },
  )(req, res, next);
};