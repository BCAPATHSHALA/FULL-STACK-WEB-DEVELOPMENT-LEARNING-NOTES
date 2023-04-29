import mongoose from "mongoose";

// Creating Mongoose Schema
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    required: true,
    type: String,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Creating Mongoose Model Users
export const User = new mongoose.model("User", schema);
