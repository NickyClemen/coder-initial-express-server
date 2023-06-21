const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = Joi.object({
  id: Joi.objectId(),
});