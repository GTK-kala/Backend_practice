import Home from "./components/Home/Home";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login/Login";
import { AnimatePresence } from "framer-motion";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 1000,
            removeDelay: 1000,
            style: {
              background: "rgba(30, 41, 59, 0.8)", // glassy dark-blue background
              color: "#fff",
              borderRadius: "12px",
              padding: "12px 16px",
              fontSize: "0.95rem",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.08)",
            },
            success: {
              duration: 2000,
              iconTheme: {
                primary: "#38bdf8",
                secondary: "#0f172a",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#0f172a",
              },
            },
          }}
        />
      </AnimatePresence>
    </>
  );
};

export default App;
