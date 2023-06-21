module.exports = async (req, res, next) => {
  try {
    const productMessages = require('../productMessages');
    const createProductService = require('../services/CreateProduct.service');

    const { body } = req;

    return res.status(201).json({
      message: productMessages.created,
      product_id: await createProductService.execute(body),
    })

  } catch (err) {
    next(err);
  }
}