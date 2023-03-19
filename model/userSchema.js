const mongooose = require("mongoose");
const userSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  
  favSinger: {
    type: String,
    required: true,
  },
  
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  }
  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
  // messages: [
  //   {
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //     email: {
  //       type: String,
  //       required: true,
  //     },
     
  //     message: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
  // tokens: [
  //   {
  //     token: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  
});

// //hash the passsowrd here

// userSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 12);
//     this.cpassword = await bcrypt.hash(this.cpassword, 12);
//   }
//   next();
// });

// //we are generating jwttoken
// userSchema.methods.generateAuthToken = async function () {
//   try {
//     const token = jwt.sign({ _id: this._id }, process.env.SECRET);
//     this.tokens = this.tokens.concat({ token: token });
//     await this.save();
//     return token;
//   } catch (err) {
//     console.log(err);
//   }
// };
// // stored the message
// userSchema.methods.addMessage = async function (name, email, favSinger, message) {
//   try {
//     this.messages = this.messages.concat({ name, email, favSinger, message });
//     await this.save();
//     return this.messages;
//   } catch (err) {
//     console.log(err);
//   }
// };

// const User = mongooose.model("USER", userSchema);

// module.exports = User;
