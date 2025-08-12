const express = require('express')
const dotenv = require('dotenv')
const ConnectMongoDB = require('./database/db')
dotenv.config()
const authRoutes = require('./routes/auth-routes')
const homeRoutes = require('./routes/home-routes')
const adminRoutes = require('./routes/admin-routes')
const uploadImageRoutes = require('./routes/image-routes')
const User = require('./models/User')


// connect to db 
ConnectMongoDB()


const app = express()
const port = process.env.PORT || 3000

//middleware
app.use(express.json())


// routes
app.use('/api/auth',authRoutes)
app.use('/api/home',homeRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/image',uploadImageRoutes)




// maintence check
app.get('/health',async (req,res)=>{
    const user = await User.find({})
    console.log("user",)
    res.status(200).json({
        msg:"working fine!",
        data:user
    }) 
})





app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})