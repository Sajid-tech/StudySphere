const express = require('express')
const { uploadImageController, fetchImageController, deleteImageController } = require('../controllers/image-controller')
const authMiddleware = require('../middleware/auth-middleware')
const isAdminUser = require('../middleware/admin-middleware')
const uploadMiddleware = require('../middleware/upload-middleware')
const router = express.Router()

// //upload the image 
router.post('/upload',authMiddleware,isAdminUser,uploadMiddleware.single('image'),uploadImageController)

router.get('/get',authMiddleware,isAdminUser,fetchImageController)
router.delete('/delete/:id',authMiddleware,isAdminUser,deleteImageController)



// get all the image 


module.exports = router