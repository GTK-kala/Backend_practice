import db from "../Config/DataBase.js";
import bcrypt from "bcryptjs";

export const LoginUser = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], (err, result) => {
    if (err) {
      console.log("Database query error");
    }

    if (result.length === 0) {
      console.log("Invalid email or password");
    }

    const user = result[0];

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);

    if (!isPasswordCorrect) {
      console.log("Invalid email or password");
    } else {
      console.log("Login successfully!!!");
    }
  });
};
