const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

require('./database')

app.use(cors())
app.use(express.json())

// All my routes
app.use(require('./routes'))
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(2001, () => console.log('Server already running on port 2001'))