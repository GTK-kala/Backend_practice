import path from "path";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import route from "./Routes/routes.js";
import cookieParser from "cookie-parser";

// Configure __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(
  cors({
    origin: process.env.CORS_Origin || "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(cookieParser());

app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "Public")));

app.use("/auth", route);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
