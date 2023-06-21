const dotenv = require('dotenv');
const path = require('path');

const ENV_FILE = path.join(__dirname, '../.env');
dotenv.config({ path: ENV_FILE });

class Config {
    constructor() {
        this.JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
        this.JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;
        this.PASSWORD_SALT = Number(process.env.PASSWORD_SALT);
        this.PORT = process.env.PORT;
        this.MONG_BASE_URL = process.env.MONG_BASE_URL;
        this.MONGO_INITDB_DATABASE = process.env.MONGO_INITDB_DATABASE;
        this.MONGO_INITDB_ROOT_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME;
        this.MONGO_INITDB_ROOT_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;
        this.MONGO_PORT = process.env.MONGO_PORT;
        this.MONGO_URI = `mongodb://${ this.MONGO_INITDB_ROOT_USERNAME }:${ this.MONGO_INITDB_ROOT_PASSWORD }@${ this.MONG_BASE_URL }:${ this.MONGO_PORT }/${ this.MONGO_INITDB_DATABASE }`;
        this.NODE_DEV = process.env.NODE_ENV;
    }
}

module.exports = new Config();
