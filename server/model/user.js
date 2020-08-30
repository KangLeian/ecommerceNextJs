const db = require('../config/mongodb.js')
const User = db.collection('users')
const { ObjectID } = require('mongodb')

class UserModel {
    static register(newUser){
        return User.insertOne(newUser)
    }

    static search(user){
        return User.findOne({email: user.email})
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

module.exports = UserModel