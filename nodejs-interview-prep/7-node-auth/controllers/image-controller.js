const { uploadToCloudinary } = require('../helpers/cloudinaryHelper')
const Image = require('../models/Image')


const uploadImage = async(req,res)=>{
    try {

        //check if file is missing in req object 

        if (!req.file){
            return res.status(400).json({
                success:false,
                msg:"File is required , Pls upload the img"
            })
        }

        // upload to cloudinary 
        const {url,publicId} = await uploadToCloudinary(req.file.path)

        // stored th eimag eurl and the public id along with the uploaded user id in db 

        const newlyUploadedImage = new Image({
            url,
            publicId,
            uploadedBy:req.UserInfo.userId
        })

        await newlyUploadedImage.save()

        res.status(201).json({
            success:true,
            msg:"Image uploaded successfully",
            image :newlyUploadedImage
        })


        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            msg:"Something Went wrong! Please try again"
        })
    }
}


module.exports={
    uploadImage
}


