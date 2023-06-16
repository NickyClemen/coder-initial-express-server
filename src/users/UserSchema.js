const { mongoose } = require('mongoose');
const { Schema } = mongoose;

const userRoles = require('./userRoles');

module.exports = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: userRoles.USER },
    age: Number,
    cart_id: String,
});
