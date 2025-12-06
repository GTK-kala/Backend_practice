import express from "express";

import { LoginUser } from "../Controller/Login.js";
import { SignUpUser } from "../Controller/Signup.js";
import { LogoutUser } from "../Controller/Logout.js";
import { verifyUser } from "../Controller/VerifyUser.js";
import { VerifyToken } from "../Users/verifyToken .js";

const route = express.Router();

route.post("/login", LoginUser);
route.post("/signup", SignUpUser);
route.get("/verify/user", VerifyToken, verifyUser);
route.delete("/logout/:users_id", LogoutUser);

export default route;
