import "./Home.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      const id = localStorage.getItem("users_id");

      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:3001/auth/verify", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          setLoading(false);
          return;
        }

        const data = await res.json();
        setIsLoggedIn(true);
        setName(data.user.name);
      } catch (error) {
        console.error("Verification failed:", error);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("users_id");
    setIsLoggedIn(false);
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="home-container">
        <p className="loading-text">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="home-container">
      {isLoggedIn ? (
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="title">Welcome back</h1>
          <h2 className="username">{name}</h2>
          <p className="subtitle">You are successfully authenticated.</p>

          <div className="btn-group">
            <Link to="/dashboard" className="btn primary">
              Dashboard
            </Link>
            <button className="btn danger" onClick={logout}>
              Logout
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="title">Welcome</h1>
          <p className="subtitle">Login or create an account to continue.</p>

          <div className="btn-group">
            <Link to="/login" className="btn primary">
              Login
            </Link>
            <Link to="/signup" className="btn outline">
              Sign Up
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
