// Modules
const rootRouter = require('express').Router()
const controller = require('../controllers/root/rootController')

// Route: Home
rootRouter.get('/', controller.home)

// Route: About
rootRouter.get('/about', controller.about)

// Route: Dashboard
rootRouter.get('/dashboard', controller.dashboard)

// Route: Params
rootRouter.get('/parameters/:param', controller.params)

// Module Export
module.exports = rootRouter