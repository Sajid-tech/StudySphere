const express = require('express')

const app = express() 

// root route 
app.get("/",(req,res)=>{
    res.send('welcome to our home page ')
})

// to get all products

app.get('/products',(req,res)=>{
    const products=[
        {
            id:1,
            lable:'product 1'
        },
        {
            id:2,
            lable:'product 2'
        },
        {
            id:3,
            lable:'product 3'
        },
    ]

    res.json({
        msg:'all product',
        data:products
    })
})

// dynamic data: to get the particular data


//get a single product

app.get('/products/:id',(req,res)=>{
    console.log("req params id",req.params.id)
    const productId=parseInt(req.params.id)
 const products=[
        {
            id:1,
            lable:'product 1'
        },
        {
            id:2,
            lable:'product 2'
        },
        {
            id:3,
            lable:'product 3'
        },
    ]
    const getSignleProduct = products.find(product=> product.id === productId)

    if(getSignleProduct){
        res.json(getSignleProduct)
    }else{
        res.status(400).send('Product is not found please try with diffrent id')
    }
})




const port = 8080



app.listen(port,()=>{
    console.log(`Server is now running at port ${port}`)
})