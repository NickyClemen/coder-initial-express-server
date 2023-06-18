const path = require('path');

const express = require('express');

const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { engine } = require('express-handlebars');

const authRoutes = require('../auth');

const errorMiddleware = require('./middlewares/error.middleware');

const app = express();
const router = express.Router();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../views'));

app.use(express.static(path.join(__dirname, '../../public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors());
app.use(cookieParser());

authRoutes(router);

app.use('/', router);

app.use(errorMiddleware);

module.exports = app;