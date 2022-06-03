const Product = require('../../models/productModel')

const getAllProducts = async (req, res, next) => {
    try {
        const allProduct = await Product.find()
        res.send(allProduct)
    } catch (error) {
        res.status(200).json({
            message: "Internal Errors occurs."
        })
    }
}


module.exports ={
    getAllProducts,
}