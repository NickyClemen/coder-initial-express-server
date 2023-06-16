const { createConnection } = require('mongoose');
const config = require('../config');

module.exports = class MongoConnector {
    static async createConnector() {
        return await createConnection(config.MONGO_URI).asPromise();
    }
}