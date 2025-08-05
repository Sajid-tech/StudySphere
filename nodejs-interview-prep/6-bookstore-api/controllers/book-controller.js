const Book = require('../models/Book')

// get all books 

const getAllBooks = async(req,res)=>{
    const allBook = await Book.find({})
    if(allBook?.length>0){
        
    res.status(200).json({
        success:true,
        msg:"get All Book Succesfully",
        data:allBook
    })
    
    }else{
        res.status(404).json({
            success:false,
            msg:"No Book Found in the Collection"
        })
    }
}
const getSingleBooksById = async(req,res)=>{
    getCurrentBookId = req.params.id
    const bookById = await Book.findById(getCurrentBookId)

    if(!bookById){
        return res.status(404).json({
            success:false,
            msg:"Book With the current Id is not found! Please try with diffrent ID"
        })

    }

    res.status(200).json({
        success:true,
        data:bookById
    })
}
const addNewBook = async(req,res)=>{
   try {
     const newBookFormdata = req.body;
     const newlyCreatedBook = await Book.create(newBookFormdata)
     if(newlyCreatedBook){
        res.status(201).json({
            success: true,
            msg:"Book Added Successfully",
            data:newlyCreatedBook
        })
     }

   } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
   }

}
const updateBook = async(req,res)=>{
    try {
        const updatedBookFormData = req.body 
        const getCurrentBookId = req.params.id 
        const updatedBook =await  Book.findByIdAndUpdate(getCurrentBookId,updatedBookFormData,{
            new:true,
        })
        if(!updatedBook){
            return res.status(400).json({
                success:false,
                msg:"Book is not Found with The Id"
            })
        }

        res.status(200).json({
            success:true,
            msg:"Book Updated Successfully",
            data:updateBook
        })
    } catch (error) {
        console.log(`api failed on updating the book data`,error)
        res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
    }

}
const deleteBook = async(req,res)=>{
    try {
        const getCurrentBookId = req.params.id 
        const deletedBook = await Book.findByIdAndDelete(getCurrentBookId)

        if(!deleteBook){
            return res.status(400).json({
                 success: false,
        message: "Book is not found with this ID",
            })
        }
        res.status(200).json({
      success: true,
      data: deletedBook,
    });
    } catch (error) {
        console.log(e)
        res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
    }

}

module.exports={
    getAllBooks,getSingleBooksById,addNewBook,updateBook,deleteBook
}