module.exports = async (req, res, next) => {
  try {
    const productFinderService = require('../services/ProductFinder.service');
    const productMessages = require('../productMessages');
    console.log(req.params)
    const { params: { id } } = req;
    const product = await productFinderService.execute({ _id: id });

    if (!product) return res.status(404).json({ err_message: productMessages.notFoundById(id) });
    return res.status(200).json({ product });
  } catch (err) {
    next(err);
  }
}
