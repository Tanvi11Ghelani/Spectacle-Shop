const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretkey = process.env.KEY;
const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("not valid email address");
      }
    },
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  cpassword: {
    type: String,
    required: true,
    minlength: 6,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  carts: Array,
});
//decrypt mate
//mongo ni pre method use kariye chiye
// nilche na no mean ae che ke jyare apda data save thay te
//pea ek middleware function ne call karo
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});
// router .js ma import kari ne postman and mongo db bane ma jovo
// aa bcryption only backend ma thayu have apde jasu frontend ma

//token generate

userSchema.methods.generateAuthtoken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, secretkey);
    // have token ma value store karvani che
    this.tokens = this.tokens.concat({ token: token });
    //have je databse ma store thay te method ne store karvani
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

//add to cart data
userSchema.methods.addcartdata = async function (cart) {
  try {
    this.carts = this.carts.concat(cart);
    await this.save();
    return this.carts;
  } catch (error) {
    console.log(error);
  }
};

const USER = new mongoose.model("USER", userSchema);

module.exports = USER;
