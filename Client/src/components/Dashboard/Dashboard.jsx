import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="sidebar">
        <h2>Dashboard</h2>
        <div className="nav-item">Home</div>
        <div className="nav-item">Profile</div>
        <div className="nav-item">Settings</div>
        <div className="nav-item">Messages</div>
        <button className="logout-btn">Logout</button>
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
    </>
  );
};

export default Dashboard;
