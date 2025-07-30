// EJS embedded javascript templating 

// ejs wil be simple templating language that lets you generate HTML markup with plain javascript 

// why it is useful 
// --> because it help you to generate the dynamic html pages in express appliaction 

// how you can write 
// <%= EJS%> tag to render 

const express = require('express')
const path = require('path')


const app = express()

 

// set the view engine as ejs

app.set('view engine','ejs')


// set the directory for the views

app.set('views',path.join(__dirname,'views'))

const products = [
    {
        id:1,
        title:'product 1',
    },
    {
        id:2,
        title:'product 2',
    },
    {
        id:3,
        title:'product 3',
    },
]

app.get('/',(req,res)=>{
    res.render('home',{title:'Home',products:products})
})


app.get('/about',(req,res)=>{
    res.render('about',{title : 'About Page'})
})

const port = 3000 

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})