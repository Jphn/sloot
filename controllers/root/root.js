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
    res.status(200).send('This website has been created by @Jphn, using NodeJs and MongoDB (^～^)')
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