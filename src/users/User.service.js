const UserRepository = require('./User.repository');

class UserService {
    #userRepository;

    constructor() {
        this.#userRepository = new UserRepository();
    }

    async createUser(user) {
        return await this.#userRepository.createUser(user);
    }

    async findByEmail(email) {
        return await this.#userRepository.findBy({ email });
    }
}

module.exports = new UserService();