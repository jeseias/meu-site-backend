const router = require('express').Router()
const multer = require('multer')
const uploadConfig = require('./config/upload') 

const upload = multer(uploadConfig)

const UserController = require('./controllers/UserController')
const AuthController = require('./controllers/AuthController')
const WorkController = require('./controllers/WorkController')
const MsgController = require('./controllers/MessageController')

// Main user
router.post('/register', upload.single('thumbnail'), UserController.store)
router.post('/authentication', AuthController.store)
router.patch('/update', upload.single('thumbnail'), UserController.update)
router.get('/user',  UserController.show)

// Work
router.post('/work', upload.single('thumbnail'), WorkController.store)
router.get('/works', WorkController.show )

// Message
router.post('/msg', MsgController.store)

module.exports = router