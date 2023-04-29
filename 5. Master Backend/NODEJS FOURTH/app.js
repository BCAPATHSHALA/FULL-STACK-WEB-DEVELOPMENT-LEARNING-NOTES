import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

//config .env file
dotenv.config({ path: "./config/.env" });

// Variables
export const app = express();

// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Using Routes
app.use("/api/v1", userRouter);
app.use("/api/v1/task", taskRouter);

// API's Root Route
app.get("/", (req, res) => {
  res.send("<h1>Nice working😃</h1>");
});

// Using Error Middleware
app.use(errorMiddleware);
