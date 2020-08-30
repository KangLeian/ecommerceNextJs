module.exports = class CartController {
    static getUserCart(req, res) {
        res.send('user cart')
    }
    static createCart(req, res){
        res.send('buat cart')
    }
    static editCart(req, res){
        res.send('edit cart')
    }
    static destroyCart(req, res){
        res.send('delet cart')
    }
}