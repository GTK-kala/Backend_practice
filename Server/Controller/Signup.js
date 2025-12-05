import db from "../Config/DataBase.js";
import bcrypt from "bcryptjs";

export const SignUpUser = (req, res) => {
  const { name, email, password } = req.body;

  const sql1 = "SELECT email FROM users WHERE email = ?";

  db.query(sql1, [email], (err, result) => {
    if (err) {
      console.log("Database query error");
    }

    if (result.length > 0) {
      console.log("Email already exists");
    }

    const hashedPassword = bcrypt.hashSync(password, 8);
    const sql2 = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    db.query(sql2, [name, email, hashedPassword], (err) => {
      if (err) {
        console.log("Database insert error");
      } else {
        console.log("User registered successfully");
      }
    });
  });
};
