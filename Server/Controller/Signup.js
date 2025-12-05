import db from "../Config/DataBase.js";
import bcrypt from "bcryptjs";

export const SignUpUser = (req, res) => {
  const { name, email, password } = req.body;

  const sql1 = "SELECT email FROM users WHERE email = ?";

  db.query(sql1, [email], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database query error" });
    }

    if (result.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);
    const sql2 = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    db.query(sql2, [name, email, hashedPassword], (err) => {
      if (err) {
        return res.status(500).json({ error: "Database insert error" });
      }

      console.log("SignUp successfully!!!");
    });
  });
};
