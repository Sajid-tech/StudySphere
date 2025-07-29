// In Node.js with Express, a middleware is a function that runs between the request and the response.

// Think of it like a checkpoint or filter that runs before the final response is sent to the client.

// Middleware is a function that has access to the request (req), response (res), and a next() function that tells Express to move to the next middleware or route. 

const express = require('express')

const app = express()


//define midlleware 

const myFirstMiddleWare = (req,res,next)=>{
    console.log("this is my first midlware will run on every request")
    next()
}
app.use(myFirstMiddleWare)
app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

const port = 3000

app.listen(port,()=>{
    console.log(`Server is now running on port ${3000}`)
})