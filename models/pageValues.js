const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PageValues = new Schema({
    page: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

mongoose.model('PageValues', PageValues)