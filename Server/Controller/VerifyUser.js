import db from "../Config/database.js";
export const verifyUser = (req, res) => {
  const users_id = parseInt(req.params.users_id);
  const sql = "SELECT * FROM users WHERE users_id = ?";

  db.query(sql, [users_id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database query error" });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User verified", user: result[0] });
  });
};
