import express from "express";

import { LoginUser } from "../Controller/Login.js";
import { SignUpUser } from "../Controller/Signup.js";
import { LogoutUser } from "../Controller/Logout.js";
import { verifyUser } from "../Controller/VerifyUser.js";
import { verifyToken } from "../Controller/VerifyUser.js";

const route = express.Router();

route.post("/login", LoginUser);
route.post("/signup", SignUpUser);
route.delete("/logout/:users_id", LogoutUser);
route.get("/verify", verifyToken, verifyUser);

export default route;
