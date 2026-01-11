import jwt from "jsonwebtoken";
import db from "../Config/database.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "No token found" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    req.user = decoded;
    next();
  });
};

export const verifyUser = (req, res) => {
  const userId = req.user.id; // decoded token ID

  const sql = "SELECT * FROM users WHERE id = ?";

  db.query(sql, [userId], (err, result) => {
    if (err) return res.status(500).json({ message: "DB error" });
    if (result.length === 0)
      return res.status(404).json({ message: "User not found" });

    return res.status(200).json({
      message: "User verified",
      user: result[0],
    });
  });
};
