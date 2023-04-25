import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../model/userModel.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";

export const newUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: "manojnishad@gmail.com" });
  if (user) {
    return next(new ErrorHandler("User already exist", 400));
  }

  await User.create({
    name: "manoj nishad",
    email: "manojnishad@gmail.com",
  });
  res.status(201).json({ message: "User created successfully" });
});
