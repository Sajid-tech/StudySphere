const express= require('express')
const { loginUser, registerUser, changedPassword } = require('../controllers/auth-controller')
const authMiddleware = require('../middleware/auth-middleware')


const router = express.Router()

router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/changePassword', authMiddleware,changedPassword)



module.exports = router