const db = require('../config/mongodb.js')
const Product = db.collection('products')
const { ObjectID } = require('mongodb')
const upload = require('../middleware/upload')

class ProductModel {
    static getAllProduct(){
        return Product.find()
    }

    static getOneProduct(id){
        return Product.findOne({_id: ObjectID(id)})
    }

    static login(user){
        return User.findOne({ 
            $and: [
                { email: user.email},
                { password: user.password}
            ]
        })
    }
}

module.exports = ProductModel