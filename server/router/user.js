const routerUser = require('express').Router()
const UserController = require('../controller/userController')

routerUser.post('/login', UserController.login)
routerUser.post('/register', UserController.register)

module.exports = routerUser