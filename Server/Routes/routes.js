import express from "express";

import { SignUpUser } from "../Controller/Signup.js";
import { LoginUser } from "../Controller/Login.js";
import { LogoutUser } from "../Controller/Logout.js";

const route = express.Router();

route.post("/signup", SignUpUser);
route.post("/login", LoginUser);
route.delete("/logout/:users_id", LogoutUser);

export default route;
