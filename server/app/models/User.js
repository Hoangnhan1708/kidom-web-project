// Using Node.js `require()`
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    id: { type: String, require },
    username: { type: String, require },
    password: { type: String, require },
    name: { type: String },
    avatarUrl: { type: String },
});

module.exports = mongoose.model('User', User);
