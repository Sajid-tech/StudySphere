const express = require('express')
const { uploadImage } = require('../controllers/image-controller')
const authMiddleware = require('../middleware/auth-middleware')
const isAdminUser = require('../middleware/admin-middleware')
const uploadMiddleware = require('../middleware/upload-middleware')
const router = express.Router()

//upload the image 
router.post('/upload',authMiddleware,isAdminUser,uploadMiddleware.single('image'),uploadImage)


// get all the image 


module.exports = router