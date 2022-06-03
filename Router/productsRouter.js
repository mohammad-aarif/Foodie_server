const express = require("express")

// Internal Imports 
const { getAllProducts, getCatagoryProducts, getSingleProduct} = require("../controllers/Products/getProduct")
const postProduct = require("../controllers/Products/postProduct")


const router = express.Router()


// Getting All Products
router.get('/', getAllProducts)

// Getting Catagory Filtered Products
router.get('/:catagory', getCatagoryProducts)

// Getting Single Product
router.get('/product/:id', getSingleProduct)

// Posting Product Data to the database 
router.post('/', postProduct)

module.exports = router