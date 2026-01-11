import db from "../Config/DataBase.js";

export const LogoutUser = async (req, res) => {
  const users_id = parseInt(req.params.users_id);

  const sql = "Delete from users where users_id = ?";

  db.query(sql, [users_id], (err) => {
    if (err) {
      return res.status(500).json({
        message: "Internal server error",
      });
    }
    return res.status(200).json({
      message: "Logout successful",
    });
  });
};
