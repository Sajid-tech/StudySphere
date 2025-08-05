const express = require('express')
const dotenv = require('dotenv')
const connectToDB = require('./database/db')
const bookRoutes = require('./routes/book-routes')
dotenv.config()


const app = express()
const port = process.env.PORT || 3000

// connect to the database 
connectToDB()

// middleware -> express.json()
app.use(express.json()) // middleware taht only passs the json 

//routes
app.use('/api/books',bookRoutes)

app.listen((port),()=>{
    console.log(`Server is running in the port ${port}`)
})