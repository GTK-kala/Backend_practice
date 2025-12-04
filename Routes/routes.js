import express from "express";

import { SignUpUser } from "../Controller/Signup.js";
import { LoginUser } from "../Controller/Login.js";

const route = express.Router();

route.post("/signup", SignUpUser);
route.post("/login", LoginUser);
export default route;
