const express = require("express");
const { registerUser, getuser, getuserSame } = require("./UserController");
const router = express.Router();

//HTTP Method POST(Create Data)
router.route("/register").post(registerUser).get(getuserSame);

//HTTP Method GET(Read Data)
router.route("/userdata").get(getuser);

module.exports = router;
