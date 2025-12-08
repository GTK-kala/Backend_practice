import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContextProvide from "./Context/ContextProvide.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvide>
        <App />
      </ContextProvide>
    </BrowserRouter>
  </StrictMode>
);
