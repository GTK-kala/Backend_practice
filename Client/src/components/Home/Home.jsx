import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome</h1>
      <p>Select an option to continue.</p>
      <div className="btn-group">
        <a href="#" className="btn">
          Login
        </a>
        <a href="#" className="btn">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Home;
