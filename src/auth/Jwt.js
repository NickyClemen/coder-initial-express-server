const jwt = require('jsonwebtoken');
const config = require('../../config');

class Jwt {
  #jwtSecret;
  #expiresIn;

  constructor() {
    this.#jwtSecret = config.JWT_TOKEN_SECRET;
    this.#expiresIn = { expiresIn: config.JWT_EXPIRES_IN };
  }

  async signJwt(payload) {
    const {
      _id,
      first_name,
      last_name,
      email,
      role,
    } = payload;

    return await jwt.sign(
      {
        _id,
        first_name,
        last_name,
        email,
        role,
      },
      this.#jwtSecret,
      this.#expiresIn,
    );
  }
}

module.exports = new Jwt();