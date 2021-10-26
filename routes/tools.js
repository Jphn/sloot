// Modules
const toolsRouter = require('express').Router()

// Routes
const workRoute = require('./tools/work')

// Route: Work
toolsRouter.use('/work', workRoute)

// Module Exportation
module.exports = toolsRouter