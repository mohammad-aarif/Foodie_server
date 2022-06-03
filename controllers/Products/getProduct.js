const Product = require('../../models/productModel')


// Getting All Products 
const getAllProducts = async (req, res, next) => {
    try {
        const allProduct = await Product.find()
        res.send(allProduct)
    } catch (error) {
        res.status(200).json({
            message: "Internal Server Error!"
        })
    }
}

// Getting Products by Catagory 
const getCatagoryProducts = async (req, res, next) => {
    try {
        const allProduct = await Product.find({catagory: req.params.catagory})
        res.send(allProduct)
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!"
        })
    }
}

// Getting Single Product 
const getSingleProduct = async (req, res, next) => {
    try {
        const allProduct = await Product.find({_id: req.params.id})
        res.send(allProduct)
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!"
        })
    }
}


module.exports ={
    getAllProducts,
    getCatagoryProducts,
    getSingleProduct,
}