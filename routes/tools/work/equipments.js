// Modules
const equipmentsRouter = require('express').Router()
const controller = require('../../../controllers/tools/work/equipments')

// Route: Main
equipmentsRouter.get('/', controller.main)

// Route: Edit
equipmentsRouter.get('/edit/:id', controller.edit)

// Module Exportation
module.exports = equipmentsRouter