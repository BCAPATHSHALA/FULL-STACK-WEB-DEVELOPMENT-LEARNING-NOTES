import express from "express";
import userRouter from "./routes/user.js";
import errorMiddleware from "./middlewares/Error.js";
import database from "./config/databse.js";
import dotenv from "dotenv";

//config .env file
dotenv.config({ path: "./config/.env" });

const app = express();
app.use("/user", userRouter);

database();

app.listen(4000, () => {
  console.log(`Server is working now`);
});

app.use(errorMiddleware);
