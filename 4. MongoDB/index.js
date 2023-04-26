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
const student = new mongoose.Schema({
  name: String,
  workout: Boolean,
  height: Number,
});

const Student = new mongoose.model("Student", student);

const adder = async () => {
  // Creating Database
  const data = await Student.create({
    name: "Manoj Kumar",
    workout: true,
    height: 6,
  });

  // Saving Data In Database
  await data.save();
};

adder();
