import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";

//config .env file
dotenv.config({ path: "./config/.env" });

// Variables
export const app = express();

// Middlewares
app.use(express.json());
app.use("/api/v1", userRouter);

// API's Root Route
app.get("/", (req, res) => {
  res.send("<h1>Nice working😃</h1>");
});
