// Modules
const mongoose = require('mongoose')
require('../../../models/equipments')
const Equipment = mongoose.model('Equipments')

// Controller: Main
exports.main = (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({ content: 'no content here' })
}

// Controller: Edit
exports.edit = (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    Equipment.findByIdAndUpdate(req.body.id, req.body, { new: true }, (err, data) => {
        if (err) {
            console.log(err)
            res.status(400).json(err)
        } else {
            res.status(200).json(data)
        }
    })
}