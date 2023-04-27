import express from "express";
import path from "path";
import mongoose from "mongoose";

import dotenv from "dotenv";

//config .env file
dotenv.config({ path: "./.env" });

// Database Connection
const database = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(
        `MongoDB connected::::::::::::::: ${mongoose.connection.host}`
      );
    })
    .catch((err) => {
      console.error(err);
    });
};
database();

// Creating Mongoose Schema/Model
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Messge = new mongoose.model("Message", messageSchema);

const app = express();
const users = [];

//! Using Middlewares
// Setting Up Static Folder Public
app.use(express.static(path.join(path.resolve(), "public")));
// Access Data From HTML Form
app.use(express.urlencoded({ extended: true }));

// Setting Up View Engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "MANOJ NISHAD" });
});

app.get("/add", async (req, res) => {
  await Messge.create({ name: "MANOJ NISHAD", email: "manojnishad@gmail.com" });
  res.send("Nice");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.post("/contact", async (req, res) => {
  const { name, email } = req.body;
  const data = await Messge.create({
    name,
    email,
  });
  // Saving Data In Database
  await data.save();
  res.redirect("/success");
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.listen(5000, () => {
  console.log(`Server is working`);
});
