// Modules
const apiRouter = require('express').Router()

// Routes
const workRoute = require('./api/work')

// Route: Work
apiRouter.use('/work', workRoute)

// Module Exportation
module.exports = apiRouter