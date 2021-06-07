const express = require('express')

const multer = require('multer')
const multerconfig = require('./config/multerconfig')

const sessioncontroller = require('./controllers/sessioncontroller.js')
const usercontroller = require('./controllers/usercontroller.js')
const uploadmiddleware = require('./middlewares/upload.js')
const authmiddleware = require('./middlewares/auth')

const upload = multer(multerconfig)
const routes = express.Router()

routes.post('/cadastro', usercontroller.register)
routes.post('/login', sessioncontroller.createsession)
routes.put('/cadastro', authmiddleware, usercontroller.update)
routes.post('/upload', authmiddleware, upload.single('file'), uploadmiddleware)
routes.get('/', (req, res) => res.send('hello world'))


module.exports = routes