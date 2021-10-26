// Modules
const mongoose = require('mongoose')
require('../../models/pageValues')
const PageValues = mongoose.model('PageValues')

// Controller: Home
exports.home = (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.status(200).render('main/home/index', {
        pageValues: {
            title: 'Home Page',
            subtitle: 'This one will be the initial page.',
            message: ' Here goes the content of the home page.'
        }
    })
}

// Controller: About
exports.about = (req, res) => {
    res.setHeader('Content-Type', 'text/plain')

    PageValues.findById('615af2142c48c1438d27928b', (err, pageValues) => {
        if (err) {
            console.error(err)
            res.status(500).send(err.message)
        } else {
            res.status(200).send(pageValues.message)
        }
    })
}

// Controller: Dashboard
exports.dashboard = (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.status(200).render('main/dashboard/index', {
        pageValues: {
            title: 'Dashboard',
            subtitle: 'Here we will have a lot of infos',
            message: 'Graphs, numbers and other components.'
        }
    })
}

// Controller: Params
exports.params = (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send(`${req.params.param} ip: ${req.ip}`)
}