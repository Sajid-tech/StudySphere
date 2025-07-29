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