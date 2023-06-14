import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const Connection = async (
  username = process.env.MONGODB_USERNAME,
  password = process.env.MONGODB_PASSWORD
) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.rrqx4gb.mongodb.net/?retryWrites=true&w=majority`;

  try {
    mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;
