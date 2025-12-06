import "./Dashboard.css";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  const HandleLogOut = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:3001/auth/logout/${id}`;
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ users_id: id }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error("Logout failed");
      } else {
        toast.success(data.message);
        localStorage.removeItem("users_id");
        cookieStore.delete("token");
        navigate("/");
      }
    } catch (error) {
      toast.error("Logout failed", error);
    }
  };
  useEffect(() => {
    const users_id = localStorage.getItem("users_id");
    setId(users_id);
  }, []);
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <div className="nav-item" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="nav-item">Profile</div>
        <div className="nav-item">Settings</div>
        <div className="nav-item">Messages</div>
        <button className="logout-btn" onClick={(e) => HandleLogOut(e)}>
          Logout
        </button>
      </div>

      <div className="main-content">
        <div className="welcome-box">
          <h1>Welcome Back!</h1>
          <p>
            You are successfully logged in. Explore your dashboard using the
            menu on the left.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
