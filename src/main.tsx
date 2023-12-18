import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Import BrowserRouter
import App from "./App.tsx";
import "./index.css";
import AboutPage from "./pages/AboutPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/abo" element={<AboutPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
