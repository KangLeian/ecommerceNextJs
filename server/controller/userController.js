const UserModel = require('../model/user.js')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken')

class UserController {
    static login(req, res) {
        let user = {
            email: req.body.email,
            password: req.body.password
        }
        UserModel.search(user)
            .then(result => {
                if(result){
                    if(bcrypt.compareSync(user.password, result.password)){
                        res.status(200).send({access_token: jwt.sign({user: result}, 'rahasia')})
                    }else{
                        res.status(400).send({message: "password salah"})
                    } 
                }else{
                    res.status(400).send({message: "user belum teregister"})
                }
            })
            .catch(err => {
                return res.status(500).json({message: `Error: reason ---> ${err}`})
            })
    }

    static register(req, res){
        if(req.body){
            let newUser = {
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, salt),
                saldo: 0,
                product: []
            }
            UserModel.search(newUser)
                .then(result => {
                    if(result){
                        return result
                    }else{
                        return UserModel.register(newUser)
                    }
                })
                .then(regisResult => {
                    res.status(201).send({message: `User registered`})
                })
                .catch(err => {
                    return res.status(500).json({message: `Error: reason ---> ${err}`})
                })
        }else{
            return res.status(400).json({message: `Error: reason ---> check your input field, please.`})
        }
    }
}

module.exports = UserController