const Joi = require('joi');

module.exports = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  age: Joi.string().pattern(/^[0-9]+$/),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});