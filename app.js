const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const config = require('./src/config');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors());

const server = app.listen(config.PORT, () => console.log(`server listenning on port ${server.address().port}`));