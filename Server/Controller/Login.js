import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../Config/database.js";

export const LoginUser = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Server error",
      });
    }

    if (result.length === 0) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const user = result[0];
    console.log(user);

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: user.users_id, // matches verifyUser
        role: user.role, // optional but recommended
        email: user.email,
      },
      process.env.JWT_SECRET, // MUST match verifyUser
      { expiresIn: process.env.JWT_Expire || "1d" } // optional
    );

    return res.status(200).json({
      message: "Login successful",
      user: user, // send user object
      token: token, // send JWT
    });
  });
};
