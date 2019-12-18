const router = require('express').Router()
const multer = require('multer')
const uploadConfig = require('./config/upload') 

const upload = multer(uploadConfig)

const UserController = require('./controllers/UserController')

// Main user
router.post('/register', upload.single('thumbnail'), UserController.store)

module.exports = router