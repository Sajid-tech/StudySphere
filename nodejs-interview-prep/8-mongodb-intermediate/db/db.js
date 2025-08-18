const mongoose = require('mongoose')


const connectToDB = async ( )=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        console.log('Connection err while connecting to db',error)
        process.exit(1)
    }
}

module.exports = connectToDB