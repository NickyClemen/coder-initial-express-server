const { mongoose } = require('mongoose');
const { Schema } = mongoose;

module.exports = new Schema(
    {
        code: { type: String, required: true }, // código autogenerado
        purchase_datetime: { type: Date, required: true }, // created_at
        amount: { type: Number, required: true }, // monto total de la compra
        purchaser: { type: String, required: true }, // email del user.
    },
    { versionKey: false },
);
