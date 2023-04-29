import express from "express";
import { getMyProfile, login, logout, register } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/user/new", register);
router.post("/user/login", login);
router.get("/user/logout", logout);
router.route("/user/me").get(isAuthenticated, getMyProfile);
export default router;
