const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
    email: { type: String, required: true },
    artData: { type: String, required: true }
});

module.exports = mongoose.model('Art', artSchema);
