const jwt = require('jsonwebtoken')
const UserModel = require('../model/user')

function authentication(req, res, next){
    const { access_token } = req.headers
    if(!access_token){
        return res.status(400).json({message: "Invalid access token"})
    }

    const decode = jwt.verify(access_token, 'rahasia')
    req.userData = decode

    UserModel.search(decode)
        .then(result => {
            if(!result){
                return res.status(400).json({message: "Invalid user"})
            }else{
                next()
            }
        })
        .catch(err => {
            return res.status(500).json({message: `Error: reason ---> ${err}`})
        })
}

module.exports = { authentication }