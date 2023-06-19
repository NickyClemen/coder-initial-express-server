const createModel = require('../database/Model');
const UserSchema = require('./UserSchema');

module.exports = class UserRepository {
    #userModel;

    constructor() {
        this.#userModel = createModel('User', UserSchema);
    }

    async createUser(user) {
        return await this.#userModel.create(user);
    }

    async findBy(textSearch) {
        return await this.#userModel.findOne(textSearch);
    }
}