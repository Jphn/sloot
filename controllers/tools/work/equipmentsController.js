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

// Controller: Edit
exports.edit = (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    Equipment.findById(req.params.id, (err, data) => {
        if (err) {
            console.error(err)
        } else {
            console.log(data)
            res.status(200).render('tools/work/equipments/form', {
                pageValues: {
                    pageTitle: 'Edit Equipment',
                    title: 'Edit Equipment',
                }
            })
        }
    })
}