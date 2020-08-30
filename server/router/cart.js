const routerUser = require('./user')
const CartController = require('../controller/cartController')

const routerCart = require('express').Router()

//authentication user buyer
routerCart.get('/cart', CartController.getUserCart)
routerCart.post('/cart', CartController.createCart)
routerCart.put('/cart/:id', CartController.editCart)
routerCart.delete('cart/:id', CartController.destroyCart)

module.exports = routerCart