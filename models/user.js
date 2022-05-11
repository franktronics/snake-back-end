const mongoose = require('mongoose')
const { Schema } = mongoose

const user = new Schema({
    name: {type: String, required: true},
    token: {type: String, required: true},
    facile: {
        date: {type: Number, required: true},
        value: {type: Number, required: true}
    },
    moyen: {
        date: {type: Number, required: true},
        value: {type: Number, required: true}
    },
    difficile: {
        date: {type: Number, required: true},
        value: {type: Number, required: true}
    },
})

module.exports = mongoose.model('user', user)