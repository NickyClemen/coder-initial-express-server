const { mongoose } = require('mongoose');
const { Schema } = mongoose;

module.exports = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: [String], default: [] },
    code: { type: String, required: true },
    stock: { type: Number, required: true },
    status: { type: Boolean, required: true, default: true },
    category: { type: String, required: true },
  },
  { versionKey: false },
  { collection: 'products' },
);
