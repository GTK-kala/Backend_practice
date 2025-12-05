import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container">
      <h2>Create Account</h2>

      <form action="/auth/signup" method="post">
        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
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
