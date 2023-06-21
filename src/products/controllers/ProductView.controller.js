module.exports = async (_req, res, _next) => {
  const productFinderService = require('../services/ProductFinder.service');

  res.render(
    'products',
    {
      title: 'Lista de productos',
      products: await productFinderService.execute({}),
    },
  );
}
