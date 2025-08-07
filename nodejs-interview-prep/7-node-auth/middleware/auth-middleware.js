const jwt = require('jsonwebtoken')

const authMiddleware = (req,res,next)=>{
    console.log("Auth Middleware is called")
    const authHeader = req.headers['authorization']
    
    // console.log("authheader",authHeader)
    const token = authHeader && authHeader.split(" ")[1]
    // console.log(token)
    if(!token){
        return res.status(401).json({
            success:false,
            msg:"Access Denied , No tojen provided , Please login to continue"
        })
    }

    // decode this token 
   

    try {
         const decodeTokenInfo = jwt.verify(token,process.env.JWT_SECRET_KEY)
    console.log("decodetokeninfo",decodeTokenInfo)

    req.userInfo = decodeTokenInfo
    // req.sajidInfo = decodeTokenInfo
    // console.log("req",req.userInfo)
    next()
    } catch (error) {
        console.log(error)
        return  res.status(401).json({
            success:false,
            msg:"Access Denied , No tojen provided , Please login to continue"
        })
    }
    
    next()
}

module.exports = authMiddleware