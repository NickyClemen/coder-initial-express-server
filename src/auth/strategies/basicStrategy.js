const passport = require('passport');
const { BasicStrategy} = require('passport-http');

passport.use(
    new BasicStrategy(async (username, password, done) => {
        const findUser = await userService.findByEmail(username);

    }),
);
