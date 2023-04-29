import mongoose from "mongoose";

export const database = () => {
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
