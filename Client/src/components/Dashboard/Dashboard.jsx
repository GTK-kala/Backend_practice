import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const HandleLogOut = async () => {
    // localStorage.removeItem("users_id");
    // localStorage.removeItem("auth_token");
    navigate("/login");
  };

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
