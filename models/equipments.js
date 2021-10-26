const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Equipments = new Schema({
    code: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    subtype: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    comments: {
        type: String,
        required: false
    }
})

mongoose.model('Equipments', Equipments)