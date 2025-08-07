const mongoose = require('mongoose')


const ConnectMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('mongodb connected successfully')
    } catch (error) {
        console.log('Error on connecting db',error)
        process.exit(1)
    }
}

module.exports = ConnectMongoDB;