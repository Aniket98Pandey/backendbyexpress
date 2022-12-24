const mongoose = require("mongoose");
const User=require("./Model/User");
const Url =
  "mongodb+srv://Aniket:Aniket123@cluster0.qywec5t.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(
  Url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Db are connected");
  }
);
const user=new User({
    name:"Aniket",
    email:"ankitkumar24august@gmail.com",
    password:"1234",
    age:22
})
user.save().then(()=>{
    console.log("user are added");
});
