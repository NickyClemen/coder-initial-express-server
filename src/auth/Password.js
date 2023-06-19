const bcrypt = require('bcrypt');
const config = require('../../config');

class Password {
  constructor() {
    this.passwordSalt = config.PASSWORD_SALT;
  }

  async hashPassword(password) {
    return await bcrypt.hash(password, this.passwordSalt);
  }

  async comparePassword(hashPassword, plainTextPassword) {
    return await bcrypt.compare(hashPassword, plainTextPassword);
  }
}

module.exports = new Password();
