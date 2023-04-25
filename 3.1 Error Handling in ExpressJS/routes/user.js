import express from "express";
import { newUser } from "../controllers/userConteroller.js";

const router = express.Router();

router.get("/new", newUser);

export default router;
