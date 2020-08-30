module.exports = class ProductController {
    static getAllProduct(req, res) {
        res.send('semua product')
    }
    static getOneProduct(req, res){
        res.send('satu product')
    }
    static createProduct(req, res){
        res.send('buat product')
    }
    static editProduct(req, res){
        res.send('edit product')
    }
    static destroyProduct(req, res){
        res.send('delet product')
    }
}