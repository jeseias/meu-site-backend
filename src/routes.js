const router = require('express').Router()
const multer = require('multer')
const uploadConfig = require('./config/upload') 

const upload = multer(uploadConfig)

const UserController = require('./controllers/UserController')
const AuthController = require('./controllers/AuthController')
const WorkController = require('./controllers/WorkController')

// Main user
router.post('/register', upload.single('thumbnail'), UserController.store)
router.post('/authentication', AuthController.store)

// Work
router.post('/work', upload.single('thumbnail'), WorkController.store)

module.exports = router