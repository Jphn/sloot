// Modules
const workRouter = require('express').Router()

// Route's import
// const projectorsRoute = require('./work/projectors')
const equipmentsRoute = require('./work/equipments')

// Route: Projectors
// workRouter.use('/projectors', projectorsRoute)

// Route: Equipments
workRouter.use('/equipments', equipmentsRoute)

// Module Exportation
module.exports = workRouter