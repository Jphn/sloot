// Modules
const equipmentsRouter = require('express').Router()
const controller = require('../../../controllers/api/work/equipmentsController')

// Route: Main
equipmentsRouter.get('/read', controller.read)

// Route: Update
equipmentsRouter.post('/update', controller.update)

// Route: Delete
equipmentsRouter.post('/delete', controller.delete)

// Module Exportation
module.exports = equipmentsRouter