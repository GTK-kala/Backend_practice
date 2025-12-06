import db from "../Config/DataBase.js";

export const getAuthenticatedUser = (req, res) => {
  const users_id = req.user.users_id;

  const sql = "SELECT users_id, name, role FROM users WHERE users_id = ?";

  db.query(sql, [users_id], (err, result) => {
    if (err) return res.status(500).json({ message: "Database query error" });

    if (result.length === 0)
      return res.status(404).json({ message: "User not found" });

    return res.status(200).json({
      message: "Authenticated",
      user: result[0],
    });
  });
};
