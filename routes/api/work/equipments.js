// Modules
const equipmentsRouter = require('express').Router()
const controller = require('../../../controllers/api/work/equipmentsController')

// Route: Main
equipmentsRouter.get('/', controller.main)

// Route: Edit
equipmentsRouter.get('/edit', controller.edit)

// Module Exportation
module.exports = equipmentsRouter