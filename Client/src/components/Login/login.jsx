import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <h2>Login</h2>

      <form action="/auth/login" method="POST">
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
