// Using Node.js `require()`
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Cart = new Schema({
    userId: { type: String, require },
    productId: { type: String, require },
    quantity: { type: Number, require },
    name: { type: String, require },
    price: { type: Number, require },
    imageUrl: { type: String, require },
});

module.exports = mongoose.model('Cart', Cart);
