const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
    username: { type: String, required: true },
    artData: { type: String, required: true }
});

module.exports = mongoose.model('Art', artSchema);
