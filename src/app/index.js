const path = require('path');

const passport = require('passport');
const express = require('express');

const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { engine } = require('express-handlebars');

const authRoutes = require('../auth');
const productRoutes = require('../products');

const ErrorMiddleware = require('./middlewares/error.middleware');
const AuthMiddleware = require('../auth/middlewares/auth.middleware');

require('../auth/strategies/LoginStrategy');
require('../auth/strategies/JwtStrategy');
require('../auth/strategies/RegisterStrategy');

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors());
app.use(cookieParser());
app.use(passport.initialize());
app.use(
  express.static(
    path.join(__dirname, '../../public'),
  ),
);

// app.use(AuthMiddleware);

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '../views'));

authRoutes(router);
productRoutes(router);

app.use('/', router);

app.use(ErrorMiddleware);

module.exports = app;