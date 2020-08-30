const routerProduct = require('express').Router()
const ProductController = require('../controller/productController')

//authentication
routerProduct.get('/product', ProductController.getAllProduct)
routerProduct.get('/product/:id', ProductController.getOneProduct)
//authorization
routerProduct.post('/product', ProductController.createProduct)
routerProduct.put('/product/:id', ProductController.editProduct)
routerProduct.delete('/product/:id', ProductController.destroyProduct)

module.exports = routerProduct