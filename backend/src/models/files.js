const mongoose = require('mongoose')

const Fileschema = new mongoose.Schema({
    path: {
        type: String,
        require: true
    },
    class: {
        type: String,
        require: true,
    },
    subject: {
        type: String,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('file', Fileschema)