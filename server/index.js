const express = require('express')
const routes = require('./api/index')
const helmet = require('helmet')
const cors = require('cors')
require('../db/index')

const app = express()
const port = 5000

// Middleware

app.use(express.json())
app.use(helmet())
app.use(cors())

app.use('/api/v1', routes)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
