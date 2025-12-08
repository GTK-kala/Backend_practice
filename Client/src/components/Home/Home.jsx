import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigator = useNavigate();
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // const token = localStorage.getItem("auth_token");

    // if (!token) {
    //   setIsLoggedIn(false);
    //   return;
    // }

    const verifyUser = async () => {
      try {
        const res = await fetch("http://localhost:3001/auth/verify", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          setIsLoggedIn(false);
          return;
        }

        const data = await res.json();
        setIsLoggedIn(true);
        setName(data.user.name);
      } catch (error) {
        console.error("Error verifying user:", error);
        setIsLoggedIn(false);
      }
    };

    verifyUser();
  }, []);

  const logout = async () => {
    // localStorage.removeItem("auth_token");
    // localStorage.removeItem("users_id");
    setIsLoggedIn(false);
    navigator("/login");
  };

  return (
    <div className="home-container">
      {isLoggedIn ? (
        <div className="welcome-logged-in">
          <h1>Welcome Back, {name}!</h1>
          <p>You are successfully logged in.</p>

          <div className="btn-group">
            <Link to="/dashboard" className="btn">
              Go to Dashboard
            </Link>
            <button className="btn" onClick={() => logout()}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="welcome-logged-out">
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
