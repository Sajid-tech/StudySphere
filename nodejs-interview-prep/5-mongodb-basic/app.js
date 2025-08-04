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
 
    const newUser = await User.create({
      name: "updated User",
      email: "sajid@gmail.com",
      age: 2,
      isActive: true,
      tags: ["designer", "developer", "manager"],
    });

    // or

    // const newUser =  new User({
    //        name: "Travis Mukherjee",
    //       email: "travis@gmail.com",
    //       age: "55",
    //       isActive: true,
    //       tags: ["developer", "designer", "manager"],
    // })

    // await newUser.save()
    console.log("created new user", newUser);

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

    // find the id  

    // const getLastCreatedUserByUserId = await User.findById(newUser._id)
    // or we can pass _id in place of newuser._id
    // console.log("getLastCreateduserbyUserId",getLastCreatedUserByUserId)

    // selected property
    // -_id minus here it means exclude that property
    // const selectedFields = await User.find().select("name email -_id")
    // console.log("selectedField",selectedFields)

    // this is for eg. pagaination to get limited data 
    // it means give me 2 data but skip the first data 
    // const limitedUsers = await User.find().limit(2).skip(1);
    // console.log("limited User",limitedUsers)

    // sorting 
    // sort the data with age but in descending order -1 : descending , +1 : ascending

    // const sortedUser = await User.find().sort({age:-1})
    // console.log(sortedUser)


    // count the documents where isActive is true : give teh number of document: length
    // const countDocuments = await User.countDocuments({isActive:true})
    // console.log("countDocument",countDocuments)

    // delete the user 

    // const deletedUser = await User.findByIdAndDelete(newUser._id)
    // console.log("deelted user",deletedUser)


    // updated user 

    const updatedUser = await User.findByIdAndUpdate(newUser._id , {
      $set : {age:100}, $push:{tags:'updated'}
    },{new:true})
    console.log("Updated User",updatedUser)
  } catch (error) {
    console.log("Error:", error);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();


// 3:17:35