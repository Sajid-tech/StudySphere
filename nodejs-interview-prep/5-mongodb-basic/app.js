const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database connected success"))
  .catch((err) => console.log("connection err", err));

// schema

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

//create  user model

const User = mongoose.model("User", UserSchema);

async function runQueryExamples() {
  try {
    // create a new documnets -- by two way
    /*
    const newUser = await User.create({
      name: "Sajid",
      email: "sajid@gmail.com",
      age: 12,
      isActive: true,
      tags: ["designer", "developer", "manager"],
    });
 */
    // or

    // const newUser =  new User({
    //        name: "Raj Mukherjee",
    //       email: "raj@gmail.com",
    //       age: "40",
    //       isActive: true,
    //       tags: ["developer", "designer", "manager"],
    // })

    // await newUser.save()
    // console.log("created new user", newUser);

    // get all user

    // const allUser = await User.find({});
    //   console.log("all user:", allUser);

    // get use with isActive : true and false 

    // const getUserOfActiveTrue =await  User.find({isActive:true})
    // const getUserOfActiveFalse =await  User.find({isActive:false})
    // console.log("is Active: true:", getUserOfActiveTrue);

    // find specific user 

    // const getSajidUser = await User.findOne({name:"Sajid"})
    // console.log(getSajidUser)

    const getLastCreatedUserByUserId = await User.findById(newUser._id);
    console.log(getLastCreatedUserByUserId, "getLastCreatedUserByUserId");
  } catch (error) {
    console.log("Error:", error);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();


// 3:17:35