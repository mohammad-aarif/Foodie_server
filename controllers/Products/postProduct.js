const Product = require('../../models/productModel')


const postProduct = async (req, res, next) => {
    const newProduct = new Product(req.body)
    await newProduct.save(err => {
        if(err){
            res.status(500).json({
                error: 'Server side error'
            })
        }
        else{
            res.status(200).json({
                message: 'Successfull'
            })
        }
    })
}

module.exports = postProduct;