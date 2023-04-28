import express from "express";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
const userSchema = new mongoose.Schema({
  password: String,
  email: String,
  name: String,
});

const User = new mongoose.model("User", userSchema);

const app = express();

//! Using Middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Setting Up View Engine
app.set("view engine", "ejs");

const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const decoded = jwt.verify(token, "vhhhhg893ugfuefwt82rjkefuk");

    req.user = await User.findById(decoded._id);

    next();
  } else {
    res.redirect("/login");
  }
};

// Routes
app.get("/", isAuthenticated, (req, res, next) => {
  res.render("logout");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// API's
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.redirect("/register");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.render("login", { email, message: "Incorrect Password" });

  const token = jwt.sign({ id: user._id }, "vhhhhg893ugfuefwt82rjkefuk");

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 1000),
  });
  res.redirect("/");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return res.redirect("/login");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  user = await User.create({
    password: hashedPassword,
    email,
    name,
  });
  await user.save();

  const token = jwt.sign({ id: user._id }, "vhhhhg893ugfuefwt82rjkefuk");

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 1000),
  });
  res.redirect("/");
});

app.get("/logout", (req, res) => {
  res.cookie("token", null, {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.redirect("/");
});

app.listen(5000, () => {
  console.log(`Server is working`);
});
