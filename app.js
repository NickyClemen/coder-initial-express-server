const express = require('express');

const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const config = require('./src/config');

const MongoConnector = require('./src/database/MongoConnector');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors());
app.use(cookieParser());

const server = app.listen(config.PORT, () => {
    console.log(`server listenning on port ${server.address().port}`);

    MongoConnector.createConnector()
        .then(conn => console.log(`${conn.readyState}`))
        .catch(err => console.log(`${err.message}`));
});