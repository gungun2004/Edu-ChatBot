import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ChatbotUI from "./Pages/ChatbotUi";
import About from "./Pages/About";
function App() {
  // For demo, pretend to check localStorage for user
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Router>
      <Routes>
        {/* <Route path="/home" element={user ? <ChatbotUI /> : <Navigate to="/login" />} /> */}
        <Route path="/About" element={<About/>}/>
        <Route path="/" element={<ChatbotUI/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
