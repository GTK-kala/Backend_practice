import express from "express";

import { LoginUser } from "../Controller/Login.js";
import { SignUpUser } from "../Controller/Signup.js";
import { LogoutUser } from "../Controller/Logout.js";
import { verifyToken } from "../middleware/verifyToken .js";
import { getAuthenticatedUser } from "../Controller/VerifyUser.js";

const route = express.Router();

route.post("/login", LoginUser);
route.post("/signup", SignUpUser);
route.get("/verify/user", verifyToken, getAuthenticatedUser);
route.delete("/logout/:users_id", LogoutUser);

export default route;
