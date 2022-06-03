const mongoose = require("mongoose")

const productScema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    }
})
const Product = mongoose.model('Product', productScema)

module.exports = Product