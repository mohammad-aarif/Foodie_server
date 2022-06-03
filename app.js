const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// Internal Imports 
const productsRouter = require('./Router/productsRouter')


// Config 
dotenv.config()
const app = express()
const port = process.env.PORT 

// Middlewares 
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Database connection 
mongoose.connect(process.env.MONGOOSE_CONNECTION_URL)
.then(() => console.log('Database Connected!'))
.catch(err => console.log(err))

// Routes 
app.use('/products', productsRouter)



app.listen(port, () => {
    console.log(`Server Running on port : ${port}`)
})