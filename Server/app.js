import path from "path";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import route from "./Routes/routes.js";

// Configure __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "Public")));

app.use("/auth", route);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Home page
// app.use("/", (req, res) => {
//   res.render("index");
// });

// SigUp page
app.use("/signup", (req, res) => {
  res.render("signup");
});
// Login page
app.use("/login", (req, res) => {
  res.render("login");
});
