const passport = require('passport');
const { Strategy } = require('passport-jwt');

const config = require('../../../config');

const dateFormat = require('../../app/DateFormat');

const ExtractorFromCookieHeader = (req) => {
  return (req && req.cookies) ? req.cookies['access_token'] : undefined;
}

passport.use(
  'jwt',
  new Strategy(
    {
      secretOrKey: config.JWT_TOKEN_SECRET,
      jwtFromRequest: ExtractorFromCookieHeader,
    },
    async (jwtPayload, done) => {
      try {
        const { exp } = jwtPayload;

        if (dateFormat.compareDate(exp)) return done(null, jwtPayload);
      } catch(err) {
        done({ status: 401, error_message: err.message }, false);
      }
    },
  ),
);