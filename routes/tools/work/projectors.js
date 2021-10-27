// Modules
const projectorsRouter = require('express').Router()
const controller = require('../../../controllers/tools/work/projectorsController')

// Route: Main
projectorsRouter.get('/', controller.main)

// Module Export
module.exports = projectorsRouter