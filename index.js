// Modules
const express = require('express')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

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
    await mongoose.connect(`mongodb+srv://${dotEnv.DB_USER}:${dotEnv.DB_PASS}@cluster0.jg7jd.mongodb.net/${dotEnv.DB_NAME}?retryWrites=true&w=majority`)
}
// Static Path Config
app.use(express.static(path.join(__dirname, 'public')))

// Body Parser Config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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
const apiRoute = require('./routes/api')

// Routes: Main
app.use('/', rootRoute)

// Routes: Tools
app.use('/tools', toolsRoute)

// Routes: Tools
app.use('/api', apiRoute)

app.post('/post', (req, res) => {
    res.send(req.body)
})

// Server Start
app.listen(port, () => {
    console.log(`listening on: http://localhost:${port}`)
})