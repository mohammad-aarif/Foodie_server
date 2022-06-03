const express = require("express")
const postProduct = require("../controllers/Products/postProduct")
const Product = require("../models/productModel")

const router = express.Router()

// Posting Product Data to the database 
router.post('/', postProduct)

module.exports = router