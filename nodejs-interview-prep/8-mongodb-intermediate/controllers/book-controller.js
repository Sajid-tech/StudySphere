const Author = require('../models/Author')
const Book = require('../models/Book')

const createAuthor = async(req,res)=>{
    try {
        const author = new Author(req.body)
        await author.save()

        res.status(201).json({
            success:true,
            data:author
        })
    } catch (error) {
         console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
    }
}

const createBook = async (req,res)=>{
    try {
        
        const book = await Book.create(req.body)

         res.status(201).json({
            success:true,
            data:book
        })

    } catch (error) {
          console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
    }
}


const getBookWithAuthor = async (req,res) =>  {
    try {
        const book = await Book.findById(req.params.id).populate("author")
        // here populate 'author' it replace by teh actual author refrence 
 if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found!",
      });
    }
        res.status(200).json({
            success:true,
            data:book
        })
    } catch (error) {
          console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    }); 
    }
}


module.exports={
    createBook,
    createAuthor,
    getBookWithAuthor
}