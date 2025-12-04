import db from "../Config/DataBase.js";
import bcrypt from "bcryptjs";

export const AddUser = (req, res) => {
  const { name, email, password } = req.body;

  const sql1 = "SELECT email FROM users WHERE email = ?";

  db.query(sql1, [email], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database query error" });
    }

    if (result.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // ✅ Only runs if email does NOT exist
    const hashedPassword = bcrypt.hashSync(password, 8);
    const sql2 = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    db.query(sql2, [name, email, hashedPassword], (err) => {
      if (err) {
        return res.status(500).json({ error: "Database insert error" });
      }

      return res.status(200).json({
        message: "User registered successfully",
      });
    });
  });
};
