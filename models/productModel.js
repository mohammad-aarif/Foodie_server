const mongoose = require("mongoose")

const productScema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    price: {
        type: Number,
        require: true,
    },
    stock: {
        type: Number,
        require: true,
    },
    sku: {
        type: String,
        default: 'SK001A',
        trim: true,
    },
    description: {
        type: String,
        require: true,
        trim: true,
    },
    catagory: {
        type: String,
        default: 'None',
        enum: ['pizza', 'burger', 'combo', 'drinks', 'kids', 'chicken', 'organic'],
    },
    image: String,
})
const Product = mongoose.model('Product', productScema)

module.exports = Product