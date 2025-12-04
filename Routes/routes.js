import express from "express";

import { AddUser } from "../Controller/Signup.js";
import { GetUser } from "../Controller/Login.js";

const route = express.Router();

route.post("/signup", AddUser);
route.post("/login", GetUser);
export default route;
