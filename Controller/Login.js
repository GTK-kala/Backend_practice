import db from "../Config/DataBase.js";

export const GetUser = (req, res) => {
  const { email, password } = req.body;
  const sql =
    "SELECT email , password FROM users WHERE email = ? AND password = ?";

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database query error" });
    }
    if (result.length > 0) {
      return res.status(200).json({ message: "Login successful" });
    }
    return res.status(401).json({ message: "Invalid email or password" });
  });
};
