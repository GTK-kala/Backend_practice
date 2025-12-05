import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome</h1>
      <p>Select an option to continue.</p>
      <div className="btn-group">
        <Link to="/login" className="btn">
          Login
        </Link>
        <Link to="/signup" className="btn">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
