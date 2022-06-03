const express = require("express")

// Internal Imports 
const { getAllProducts } = require("../controllers/Products/getProduct")
const postProduct = require("../controllers/Products/postProduct")


const router = express.Router()


// Getting All Product
router.get('/', getAllProducts) 

// Posting Product Data to the database 
router.post('/', postProduct)

module.exports = router