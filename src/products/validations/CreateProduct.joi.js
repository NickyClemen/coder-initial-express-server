const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string().required(),
  description: Joi.string.required(),
  price: Joi.number().required(),
  thumbnail: Joi.array().items(Joi.string()),
  stock: Joi.number().required(),
  status: Joi.boolean(),
  category: Joi.string().required(),
});