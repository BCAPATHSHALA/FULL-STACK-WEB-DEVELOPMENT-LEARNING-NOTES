import mongoose from "mongoose";

// Creating Mongoose Schema
const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Creating Mongoose Model Users
export const User = new mongoose.model("User", schema);
