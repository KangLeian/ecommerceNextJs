const router = require('express').Router()
const routerUser = require('./user')
const routerProduct = require('./product')
const routerCart = require('./cart')

router.use(routerUser)
router.use(routerProduct)
router.use(routerCart)


module.exports = router