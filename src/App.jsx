import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact"; // Create this next
import Resume from "./components/Resume/Resume"; // Create this next
import "./App.css";

function App() {
  // 1. Create state to track the active section
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        {/* 2. Pass activeTab and setter to Navbar */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* 3. Conditional Rendering based on state */}
        {activeTab === "About" && <About />}
        {activeTab === "Contact" && <Contact />}
        {activeTab === "Resume" && <Resume />}
      </div>
    </div>
  );
}

export default App;