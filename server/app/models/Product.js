// Using Node.js `require()`
const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const Product = new Schema({
  category: {type: String, require},
  id: {type: String, require},
  name: {type: String, require},
  price: {type: Number, require},
  brand: {type: String, require},
  imageUrl: {type: [String], require},
  description: {type: String},
  star: {type: Number, require},
  stock: {type: Number, require},
  time: {type: Date, require},
});

module.exports = mongoose.model('Product', Product)