import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    try {
      const id = localStorage.getItem("users_id");
      const url = `http://localhost:3001/auth/verify/${id}`;
      // const token = cookieStore.get("token").value;
      const verifyUser = async () => {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        const Data = data.user;

        if (!res.ok) {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
          setMessage(Data.message);
          setName(Data.name);
        }
      };
      verifyUser();
    } catch (error) {
      console.error("Error verifying user:", error);
    }
  }, []);
  return (
    <div className="home-container">
      {isLoggedIn ? (
        <div className="welcome-loggedin">
          <h1>Welcome Back, {name}!</h1>
          <p>You are successfully logged in.</p>
          <p>{message}</p>
          <div className="btn-group">
            <Link to="/dashboard" className="btn">
              Go to Dashboard
            </Link>
            <button
              className="btn"
              onClick={() => {
                localStorage.removeItem("users_id");
                setIsLoggedIn(false);
              }}
            >
              Logout
            </button>
          </div>
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
