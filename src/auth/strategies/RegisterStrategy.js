const passport = require('passport');
const LocalStrategy = require('passport-local');

const Password = require('../Password');

const userService = require('../../users/User.service');
const userMessages = require('../../users/userMessages');

passport.use(
  'register',
  new LocalStrategy(
    {
			usernameField: 'email',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const { body } = req;

        const findUser = await userService.findByEmail(email);

        if (findUser) {
          return done({ status: 400, error_message: userMessages.USER_EXITS }, false);
        }

        const hashPassword = await Password.hashPassword(password);

        delete body.password;
        body.password = hashPassword;

        const newUser = await userService.createUser(body);

        done(null, newUser);
      } catch(err) {
        done(err, false);
      }
    }
  ),
);