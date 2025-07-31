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

app.put('/update/:id', (req, res) => {
    const findCurrentBook = books.find((bookItem) => bookItem.id === req.params.id);

    // if (!req.body) {
    //     return res.status(400).json({ msg: "No body found in request" ,data:findCurrentBook});
    // }
    if (findCurrentBook) {
       
        findCurrentBook.title = req.body?.title || findCurrentBook.title;

        return res.status(200).json({
            msg: `Book with ID ${req.params.id} updated successfully`,
            data: findCurrentBook
        });
    } else {
        return res.status(400).json({ msg: "Book Not Found" });
    }
});


//detelt eteh book 

app.delete('/delete/:id',(req,res)=>{
    const findIndexofCurrentBook = books.findIndex((item)=> item.id === req.params.id)

    if(findIndexofCurrentBook){
        const deletedBook = books.splice(findIndexofCurrentBook,1)
       res.status(200).json({
        msg:"Book delete succesfully",
        data:deletedBook,
       })
    }else {
        res.status(400).json({
            msg:"Book not found"
        })
    }
})

const port = 3000 

app.listen(port,()=>{
    console.log(`server running on port ${3000}`)
})