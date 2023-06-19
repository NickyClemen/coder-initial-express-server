const passport = require('passport');
const LocalStrategy = require('passport-local');

const Password = require('../Password');
const Jwt = require('../Jwt');

const userService = require('../../users/UserService');
const userMessages = require('../../users/userMessages');

passport.use(
    'login',
    new LocalStrategy(
        {
            usernameField: 'email',
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            const findUser = await userService.findByEmail(email);

            if (findUser) {
                const comparePassword = Password.comparePassword(findUser.password, password);

                if (comparePassword) {
                    delete findUser.password;

                    const accessToken = await Jwt.signJwt(findUser);
                    return done(null, accessToken);
                }

                done({ status: 403, error_message: 'password do not match' }, false);
            }

            done({ status: 401, message: userMessages.USER_EXITS }, false);
        },
    ),
);
