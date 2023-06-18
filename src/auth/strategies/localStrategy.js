const LocalStrategy = require('passport-local');

const password = require('../Password');

const userService = require('../../users/UserService');
const userMessages = require('../../users/userMessages');

passport.use(
  new LocalStrategy(
    'register',
    async (req, done) => {
      try {
        const { body } = req;
        const findUser = await userService.findByEmail(body.email);

        if (findUser) {
          done(null, false, { error_message: userMessages.USER_EXITS });
        }

        const hashPassword = await password.hashPassword(body.password);

        delete body.password;
        body.password = hashPassword;

        const newUser = await userService.createUser(body);

        done(null, newUser);
      } catch (err) {
        done(err);
      }
    }
  ),
);