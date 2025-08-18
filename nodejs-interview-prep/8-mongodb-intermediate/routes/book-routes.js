const express = require('express')
const { createAuthor, createBook, getBookWithAuthor } = require('../controllers/book-controller')

const router = express.Router()


router.post('/add-author',createAuthor)
router.post('/add-book',createBook)
router.get('/get-book/:id',getBookWithAuthor)

module.exports = router