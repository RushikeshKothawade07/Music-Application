const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const passport = require('passport')
dotenv.config({ path: "./config.env" });
const session = require('express-session');
const passportLocalMongoose = require("passport-local-mongoose");
require("./db/conn");
const User = require("./model/userSchema");
const { initializingPassport } = require("./passportConfig");
// app.use(require("./router/auth"));
const PORT = process.env.PORT || 5000;

initializingPassport(passport)


app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(passport.initialize());
app.use(passport.session());


app.get("/", (req, res) => {
  res.send("This is the about page, hello world from about server");
});
app.post("/register", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exists");

  const newUser = await User.create(req.body);
  res.status(201).send(newUser);
});

app.post('/login',passport.authenticate("local",{failureRedirect:"/player",successRedirect:"/trending"}), async(req,res)=>{

})
app.get("/logout",(req,res)=>{
  req.logout();
  res.redirect('/')
})


if(process.env.NODE_ENV=='production'){
  const path = require('path')
  app.get('/',(req,res)=>{
    app.use(express.static(path.resolve(__dirname,'client','build')))
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
