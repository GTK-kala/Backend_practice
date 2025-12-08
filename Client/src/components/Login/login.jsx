import "./login.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const values = { email, password };
    try {
      const url = "http://localhost:3001/auth/login";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        return;
      } else {
        toast.success("Login successful!");
        navigate(`/`);
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="container_login">
      <h2>Login</h2>

      <form onSubmit={(e) => HandleSubmit(e)}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
