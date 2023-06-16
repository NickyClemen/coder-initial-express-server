const express = require('express');

const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { engine } = require('express-handlebars');

const config = require('./src/config');

const MongoConnector = require('./src/database/MongoConnector');

const authRoutes = require('./src/auth');

const app = express();
const router = express.Router();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors());
app.use(cookieParser());

authRoutes(router);

app.use('/', router);

const server = app.listen(config.PORT, () => {
    console.log(`server listenning on port ${server.address().port}`);

    MongoConnector.createConnector()
        .then(conn => {
            if (conn.readyState === 1) console.log(`database connection successfuly`)
        })
        .catch(err => console.log(`${err.message}`));
});