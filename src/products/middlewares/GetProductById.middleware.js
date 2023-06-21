module.exports = async (req, _res, next) => {
  try {
    const getProductById = require('../validations/GetProductById.joi');

    const { params } = req;
    await getProductById.validateAsync(params);

    next();
  } catch(err) {
    console.log(err)
    next(err.message);
  }
}
