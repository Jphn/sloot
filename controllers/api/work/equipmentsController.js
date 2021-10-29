// Modules
const mongoose = require('mongoose')
require('../../../models/equipments')
const Equipment = mongoose.model('Equipments')

// Controller: Read
exports.read = (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({ content: 'no content here' })
}

// Controller: Create
exports.create = (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(req.body)

    // const newEquipment = {
    //     type: req.body.type,
    //     subtype: req.body.subtype,
    //     name: req.body.name,
    //     quantity: req.body.qty,
    //     comments: req.body.comments
    // }

    // new Equipment(newEquipment).save((err, result) => {
    //     if (err) {
    //         console.log(err)
    //         res.status(400).json(err)
    //     } else {
    //         console.log(result)
    //         res.status(200).json(result)
    //     }
    // })
}

// Controller: Update
exports.update = (req, res) => {
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

// Controller: Delete
exports.delete = (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    Equipment.findByIdAndDelete(req.body.id, (err, data) => {
        if (err) {
            console.log(err)
            res.status(400).json(err)
        } else {
            res.status(200).json(data)
        }
    })
}