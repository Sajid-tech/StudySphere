const cloudinary = require('../config/cloudinary');


const uploadToCloudinary = async (filePath)=>{
    try {
        const result = await cloudinary.uploader.upload(filePath)

        return {
            url: result.secure_url,
            publicId : result.public_id
        }
    } catch (error) {
        console.error('Eroor while uploadin to cloduinary',error)
        throw new Error('Eroor while uploadin to cloduinary')
    }
}


module.exports = {
    uploadToCloudinary
}