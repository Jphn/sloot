// Modules
const mongoose = require('mongoose')
require('../../../models/equipments')
const Equipment = mongoose.model('Equipments')

// Controller: Main
exports.main = (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    Equipment.find().sort({ _id: 'asc' }).lean().then((data) => {
        res.status(200).render('tools/work/equipments/', {
            pageValues: {
                pageTitle: 'Equipments',
                title: 'Equipment List',
                subtitle: 'Here we have a catalogue of school equipments',
                tableValues: data
            }
        })
    }).catch((err) => {
        if (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    })
}