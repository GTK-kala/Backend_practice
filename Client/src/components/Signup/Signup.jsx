import "./Signup.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const values = { name, email, password };

    try {
      const url = "http://localhost:3001/auth/signup";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        return;
      } else {
        toast.success("Signup successful!");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Signup failed. Please try again.");
    }

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container_signup">
      <h2>Create Account</h2>

      <form onSubmit={(e) => HandleSubmit(e)}>
        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
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
