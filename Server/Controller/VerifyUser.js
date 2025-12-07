import jwt from "jsonwebtoken";
import db from "../Config/database.js";

export const verifyUser = (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    const userId = decoded.users_id;

    const sql = "SELECT * FROM users WHERE users_id = ?";

    db.query(sql, [userId], (err, result) => {
      if (err) return res.status(500).json({ message: "DB error" });
      if (result.length === 0)
        return res.status(404).json({ message: "User not found" });

      return res.status(200).json({
        message: "User verified",
        user: result[0],
      });
    });
  });
};

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(400).json({ message: "Invalid token format" });
  }

  const token = parts[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    req.user = decoded;
    next();
  });
};
