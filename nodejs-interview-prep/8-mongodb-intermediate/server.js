const express = require('express')
const dotenv = require('dotenv')
const connectToDB = require('./db/db')
dotenv.config()
const productRoutes = require('./routes/product-routes')
const bookRoutes = require('./routes/book-routes')

// connection to db 
connectToDB()

const app = express()
const port = 3000

//middleware 

app.use(express.json())



// route

app.use('/api/product',productRoutes)
app.use('/api/book',bookRoutes)


app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})