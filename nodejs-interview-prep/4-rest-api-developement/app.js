const express = require('express')

const app = express()

// middleware 
app.use(express.json())

let books =[
    {
        id:"1",
        title:"Book 1",
    },
    {
        id:"2",
        title:"Book 2",
    },
]

app.get('/',(req,res)=>{
    res.json({
        code:200,
        msg:"Welcome to our bookstore api"
    })
})
//get all teh books 

app.get('/get',(req,res)=>{
    res.status(200).json(books)
})

//get the single book 

app.get('/get/:id',(req,res)=>{
    const book = books.find((item)=> item.id === req.params.id)
    if(book){
        res.status(200).json(book)
    }else{
        res.status(400).json({
            msg:"Book not found! Please try with a diffrent book Id"
        })
    }
})


//add a book

app.post('/add',(req,res)=>{
    const newBook ={
        id:Math.floor(Math.random()* 1000).toString(),
        title:`Book ${Math.floor(Math.random() * 1000)}`
    }
    books.push(newBook)
    res.status(200).json({
        data:newBook,
        msg:"New Book is added successfully"
    })
})


// update a book 
const port = 3000 

app.listen(port,()=>{
    console.log(`server running on port ${3000}`)
})