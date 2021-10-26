// Modules
const express = require('express')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const path = require('path')

// DotEnv Config
require('dotenv').config()
const dotEnv = process.env

// Express Config
const app = express()
const port = dotEnv.PORT || 8080
const maintenance = (dotEnv.MAINTENANCE == 'true') ? true : false

// Handlebars Config
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
const createHandlebars = handlebars.create({})
createHandlebars.handlebars.registerHelper('autoNum', (num) => {
    return num + 1
})

// Mongoose Config
main().catch(err => console.log(err))
async function main() {
    await mongoose.connect(`mongodb://${dotEnv.DB_HOST}:${dotEnv.DB_PORT}/${dotEnv.DB_NAME}`)
}
// Static Path Config
app.use(express.static(path.join(__dirname, 'public')))

// Middlewares
app.use((req, res, next) => {
    if (maintenance) {
        res.send('We are not available now')
    }
    next()
})

// Routes Imports
const rootRoute = require('./routes/root')
const toolsRoute = require('./routes/tools')

// Routes: Main
app.use('/', rootRoute)

// Routes: Tools
app.use('/tools', toolsRoute)

// Server Start
app.listen(port, () => {
    console.log(`listening on: http://localhost:${port}`)
})