import express from "express";

import { LoginUser } from "../Controller/Login.js";
import { SignUpUser } from "../Controller/Signup.js";
import { LogoutUser } from "../Controller/Logout.js";
import { verifyUser } from "../Controller/VerifyUser.js";

const route = express.Router();

route.get("/verify", verifyUser);
route.post("/login", LoginUser);
route.post("/signup", SignUpUser);
route.delete("/logout/:users_id", LogoutUser);

export default route;
