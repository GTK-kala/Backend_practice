import db from "../Config/database.js";
import bcrypt from "bcryptjs";

export const SignUpUser = (req, res) => {
  const { name, email, password } = req.body;
  const role = "user";

  const sql1 = "SELECT * FROM users WHERE email = ?";

  db.query(sql1, [email], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Error on Server!!!",
      });
    }

    if (result.length > 0) {
      return res.status(400).json({
        message: "Email already exists!!!",
        result: result,
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);
    const sql2 =
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";

    db.query(sql2, [name, email, hashedPassword, role], (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Error on Server!!!",
        });
      } else {
        return res.status(200).json({
          message: "User registered successfully",
          result: result,
        });
      }
    });
  });
};
