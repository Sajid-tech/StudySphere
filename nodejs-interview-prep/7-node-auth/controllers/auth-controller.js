const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register controller
const registerUser = async (req, res) => {
  try {
    //1. extract the user name from our request body
    const { username, email, role, password } = req.body;

    //2.check if the user is already exist in our database
    const checkExistingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (checkExistingUser) {
      return res.status(400).json({
        success: false,
        msg: "User is already exist ethier same username or same email pls try with a diffrent with diffrent username or email ",
      });
    }

    //3. now if it is exist and hash the password first by using bcryptjs
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // creaet a new user and save in db

    const newlyCreatedUser = new User({
      username,
      email,
      role: role || "user",
      password: hashedPassword,
    });
    await newlyCreatedUser.save();
    if (newlyCreatedUser) {
      res.status(200).json({
        success: true,
        msg: "User Regsitered Successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        msg: "Unable the resgister User! Pls Try Again Later",
      });
    }
    console.log("user Registered Successfull");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "Some Error Occured Pls Try Again Later",
    });
  }
};

// login controller

const loginUser = async (req, res) => {
  try {
    // get the username and password from the body
    const { username, password } = req.body;

    // find if the current user is exist in database or not

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "User Doesn't Exist",
      });
    }

    // if the password is incorrect or not

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        msg: "Invalid Credential",
      });
    }

    // create a user token

    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30m",
      }
    );

    res.status(200).json({
      success: false,
      msg: "Logged in Successfully",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "Some Error Occured Pls Try Again Later",
    });
  }
};

// change password

const changedPassword = async (req, res) => {
  try {
    // get userId first
    const userId = req.userInfo.userId;

    // extract old and new password;

    const { oldPassword, newPassword } = req.body;

    // find the current logged in user

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "User not found",
      });
    }

    // check the old password is corrects

    const isPasswordMatch = await bcrypt.compare(oldPassword,user.password)
    if(!isPasswordMatch){
        return res.status(400).json({
            success:false,
            msg:'Old password is not correct, Pls try again.'

        })

    }

    // hash the new passowrd here 

    const salt = await bcrypt.genSalt(10)
    const newHashPassword = await bcrypt.hash(newPassword,salt)


    // update the new password 

    user.password = newHashPassword
    await user.save()


    res.status(200).json({
        success:true,
        msg:"User Password Changed"
    })




  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "Something Error Occurred Server Side",
    });
  }
};

module.exports = {
  loginUser,
  registerUser,
  changedPassword,
};
