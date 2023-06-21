module.exports = async (_req, res, next) => {
  try {
    const productFinderService = require('../services/ProductFinder.service');
    const productMessages = require('../productMessages');

    const products = await await productFinderService.execute({});

    if (!products) return res.status(404).json({ err_message: productMessages.notFound });
    return res.status(200).json({ products });
  } catch (err) {
    return next(err);
  }
}
