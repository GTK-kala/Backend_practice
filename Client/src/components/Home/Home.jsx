import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    try {
      const url = `http://localhost:3001/auth/verify`;
      const token = cookieStore.get("token")?.value;
      const verifyUser = async () => {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          setIsLoggedIn(true);
        }
      };
      verifyUser();
    } catch (error) {}
  }, []);
  return (
    <div className="home-container">
      {isLoggedIn ? (
        <div className="welcome-loggedin">
          <h1>Welcome Back!</h1>
        </div>
      ) : (
        <div className="welcome-loggedout">
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
      )}
    </div>
  );
};

export default Home;
