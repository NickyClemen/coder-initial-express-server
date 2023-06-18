const registerJoiSchema = require('../validations/register.validations');

module.exports = async (req, _res, next) => {
  try {
    const { body } = req;
    await registerJoiSchema.validateAsync(body);

    next();

  } catch(err) {
    next(err.message);
  }
}
