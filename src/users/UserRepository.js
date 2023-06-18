const createModel = require('../database/Model');
const UserSchema = require('./UserSchema');

module.exports = class UserRepository {
    #userModel;

    constructor() {
        this.#userModel = createModel('User', UserSchema);
    }

    async createUser(user) {
        return this.#userModel.create(user);
    }

    async findBy(textSearch) {
        return this.#userModel.findBy(textSearch);
    }
}