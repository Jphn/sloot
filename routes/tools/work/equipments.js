// Modules
const equipmentsRouter = require('express').Router()
const controller = require('../../../controllers/tools/work/equipmentsController')

// Route: Main
equipmentsRouter.get('/', controller.main)

// Module Exportation
module.exports = equipmentsRouter