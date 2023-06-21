module.exports = async (req, res, next) => {
  try {
    const createProductSchema = require('../validations/CreateProduct.joi');

    const { body } = req;
    await createProductSchema.validateAsync(body);

    next();
  } catch(err) {
    next(err.message);
  }
}