import express from "express";

import { AddUser } from "../Controller/Signup.js";

const route = express.Router();

route.post("/signup", AddUser);

export default route;
