const mongoose= require('mongoose');

module.exports = (model, schema) => mongoose.model(model, schema);
