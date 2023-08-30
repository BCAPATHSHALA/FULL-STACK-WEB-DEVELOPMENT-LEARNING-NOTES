const mongoose = require("mongoose");

module.exports = () => {
  try {
    mongoose.connect(
      process.env.MONGODB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log(
          `MongoDB connected::::::::::::::: ${mongoose.connection.host}`
        );
      }
    );
  } catch (error) {
    console.log(error);
  }
};
