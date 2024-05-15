// Using Node.js `require()`
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    username: { type: String, require },
    password: { type: String, require },
});

module.exports = mongoose.model('User', User);
