import "./Dashboard.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextApi } from "../../Context/ContextProvide";

const Dashboard = () => {
  const navigate = useNavigate();
  const { name, role } = useContext(ContextApi);

  const handleLogout = () => {
    localStorage.removeItem("users_id");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Dashboard</h2>

        <nav className="nav-menu">
          <div className="nav-item active" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="nav-item">Profile</div>
          <div className="nav-item">Settings</div>
          <div className="nav-item">Messages</div>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <div className="welcome-box">
          <h1>Welcome back, {name}</h1>
          <h3 className="role-text">Role: {role}</h3>
          <p>
            This is your dashboard. Use the navigation panel on the left to
            manage your account and explore available features.
          </p>

          <div className="quick-actions">
            <button className="action-btn primary">View Profile</button>
            <button className="action-btn outline">Edit Settings</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
