const UserRepository = require('./UserRepository');

module.exports = class UserService {
    #userRepository;
    constructor() {
        this.#userRepository = new UserRepository();
    }

    async createUser(user) {
        return await this.#userRepository.createUser(user);
    }

    async findByEmail(email) {
        return await this.#userRepository.findByEmail(email);
    }
}