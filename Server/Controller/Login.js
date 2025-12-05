import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import db from "../Config/DataBase.js";

export const LoginUser = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Error on Server!!!",
      });
    }

    if (result.length === 0) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const user = result[0];

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    } else {
      const token = jwt.sign({ id: user.users_id }, process.env.Key, {
        expiresIn: "1h",
      });
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
      });

      return res.status(200).json({
        message: "Login successfully!!!",
        result: user,
      });
    }
  });
};
