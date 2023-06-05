const dotenv = require('dotenv');
const path = require('path');

const ENV_FILE = path.join(__dirname, '../../.env');
dotenv.config({ path: ENV_FILE });

module.exports = {
    PORT: process.env.PORT,
};
