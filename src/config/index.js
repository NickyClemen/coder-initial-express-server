const dotenv = require('dotenv');
const path = require('path');

const ENV_FILE = path.join(__dirname, '../../.env');
dotenv.config({ path: ENV_FILE });

class Config {
    constructor() {
        this.PORT = process.env.PORT;
        this.MONGO_INITDB_ROOT_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME;
        this.MONGO_INITDB_ROOT_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;
        this.MONGO_PORT = process.env.MONGO_PORT;
        this.MONG_BASE_URL = process.env.MONG_BASE_URL;
        this.MONGO_URI = `mongodb://${ this.MONGO_INITDB_ROOT_USERNAME }:${ this.MONGO_INITDB_ROOT_PASSWORD }@${ this.MONG_BASE_URL }:${ this.MONGO_PORT }`;
    }
}

module.exports = new Config();
