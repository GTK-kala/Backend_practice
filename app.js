import route from "./Routes/routes.js";
import { fileURLToPath } from "url";
import express from "express";
import dotenv from "dotenv";
import path from "path";

// Configure __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "Public")));

app.use("/auth", route);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
