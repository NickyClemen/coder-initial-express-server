const { createConnection, connect } = require('mongoose');

const config = require('../../config');

module.exports = class MongoConnector {
    static async createConnector() {
        return await connect(config.MONGO_URI);
    }
}