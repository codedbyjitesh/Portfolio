import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import { FaBars } from "react-icons/fa"; // Install react-icons if you haven't
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("About");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app">
      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={() => setIsSidebarOpen(true)}>
        <FaBars />
      </button>

      {/* Sidebar with mobile props */}
      <Sidebar isMobileOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
      
      <div className="main">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="content">
          {activeTab === "About" && <About />}
          {activeTab === "Contact" && <Contact />}
          {activeTab === "Resume" && <Resume />}
        </div>
      </div>
    </div>
  );
}

export default App;