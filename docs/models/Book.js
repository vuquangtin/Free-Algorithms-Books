const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Book = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Book',Book);