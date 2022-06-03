const mongoose = require("mongoose")

const productScema = mongoose.Schema({
    name: String,
    price: Number,
})
const Product = mongoose.model('Product', productScema)

module.exports = Product