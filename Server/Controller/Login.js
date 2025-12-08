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

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: user.users_id,
        role: user.role,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_Expire || "1d" }
    );

    const cookie = {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
    };

    return res
      .status(200)
      .cookie("token", token, cookie)
      .json({
        message: "Login successful",
        token: token,
        user: {
          id: user.users_id,
          name: user.name,
          role: user.role,
        },
      });
  });
};
