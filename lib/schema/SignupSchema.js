import mongoose from "mongoose";
const { schema } = mongoose;

const Signup = new schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  country:{
    type: String,
    required: true,
  }
});

const NewUser = mongoose.model("NewUser", Signup);
module.exports = NewUser;