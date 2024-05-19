// Using Node.js `require()`
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Session = new Schema({
    sessionId: { type: String, require },
    subject: { type: Object },
});

module.exports = mongoose.model('Session', Session);
