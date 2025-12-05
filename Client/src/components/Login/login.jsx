import "./login.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/auth/login";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (error) {
        toast.error("Login failed. Please try again.");
      } else {
        toast.success("Login successful!");
        navigate("/");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
    setValues({ email: "", password: "" });
  };
  return (
    <div className="container">
      <h2>Login</h2>

      <form onSubmit={(e) => HandleSubmit(e)}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <p className="footer-text">
        Don't have an account?
        <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
