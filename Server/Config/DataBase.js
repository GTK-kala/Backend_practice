import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const db = mysql2.createConnection({
  host: process.env.Host,
  user: process.env.User,
  password: process.env.Password,
  database: process.env.Database,
});

db.connect(() => {
  console.log("Database connected!!!");
});

export default db;
