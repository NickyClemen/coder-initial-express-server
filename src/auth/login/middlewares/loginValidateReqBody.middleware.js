const loginJoiSchema = require('../validations/login.validations');

module.exports = async (req, _res, next) => {
  try {
    const { body } = req;
    await loginJoiSchema.validateAsync(body);

    next();
  } catch(err) {
    next(err.message);
  }
}
