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
    res.status(200).json(req.body)
    // Equipment.findByIdAndUpdate(req.body.id)
}