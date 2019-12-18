const express = require('express')
const cors = require('cors')

const app = express()

require('./database')

app.use(cors())
app.use(express.json())

// All my routes
app.use(require('./routes'))

app.listen(2001, console.log('Server running on port 2001'))