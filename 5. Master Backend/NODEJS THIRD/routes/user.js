import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUserDetails,
  register,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/users/all", getAllUsers);

router.post("/user/new", register);

router
  .route("/userid/:id")
  .get(getUserDetails)
  .put(updateUser)
  .delete(deleteUser);

export default router;
