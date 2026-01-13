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
    <div className="dashboard-page">
      {/* Top Navbar */}
      <header className="top_bar">
        <h2 className="logo" onClick={() => navigate("/")}>
          Dashboard
        </h2>

        <nav className="top-nav">
          <span onClick={() => navigate("/")}>Home</span>
          <span>Profile</span>
          <span>Settings</span>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="dashboard-content">
        <div className="welcome-card">
          <h1>Welcome back, {name}</h1>
          <h3 className="role-text">Role: {role}</h3>
          <p>
            This is your dashboard. All important information and actions are
            available here.
          </p>

          <div className="action-row">
            <button className="action-btn primary">View Profile</button>
            <button className="action-btn outline">Edit Settings</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
