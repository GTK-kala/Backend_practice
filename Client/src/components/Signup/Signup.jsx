import "./Signup.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/auth/signup";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (error) {
        toast.error("Signup failed. Please try again.");
      } else {
        toast.success("Signup successful! Please login.");
        navigate("/login");
      }
    } catch (error) {
      toast.error("Signup failed. Please try again.");
    }
    setValues({ name: "", email: "", password: "" });
  };
  return (
    <div className="container">
      <h2>Create Account</h2>

      <form onSubmit={(e) => HandleSubmit(e)}>
        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            required
          />
        </div>

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

        <button type="submit">Sign Up</button>
      </form>

      <p className="footer-text">
        Already have an account?
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
