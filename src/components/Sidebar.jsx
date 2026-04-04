import React, { useState } from "react";
import "./sidebar.css";
import { 
  FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin, 
  FaTimes, FaTwitter, FaInstagram 
} from "react-icons/fa";

export default function Sidebar({ isMobileOpen, closeSidebar }) {
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const profileImg = "https://i.pinimg.com/736x/c4/ea/8b/c4ea8bf28dd46e81339c825ff8248533.jpg";

  return (
    <>
      {/* 1. Backdrop for mobile */}
      <div 
        className={`sidebar-overlay ${isMobileOpen ? "active" : ""}`} 
        onClick={closeSidebar}
      ></div>

      {/* 2. Sidebar Container */}
      <div className={`sidebar ${isMobileOpen ? "mobile-show" : ""}`}>
        
        {/* Mobile Close Button */}
        <button className="close-sidebar-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>

        <div className="profile">
          <img
            src={profileImg}
            alt="profile"
            className="clickable-img"
            onClick={() => setIsImgModalOpen(true)}
          />
          <h2>HAMZAOUI Amine</h2>
          <span className="badge">Full stack developer</span>
        </div>

        <hr />

        <div className="info">
          <div className="info-item">
            <div className="icon-box"><FaMapMarkerAlt /></div>
            <div>
              <p className="label">LOCATION</p>
              <p>Algeria</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box"><FaEnvelope /></div>
            <div>
              <p className="label">EMAIL</p>
              <p title="aminehamzaoui1925@gmail.com">aminehamzaoui1925...</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box"><FaGithub /></div>
            <div>
              <p className="label">GITHUB</p>
              <p>sabo</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box"><FaLinkedin /></div>
            <div>
              <p className="label">LINKEDIN</p>
              <p>HAMZAOUI Amine</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-socials">
          <FaGithub className="social-icon" />
          <FaLinkedin className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaEnvelope className="social-icon" />
        </div>
        
        <p className="copyright">© 2024 <span>sabo</span></p>

        {/* Image Modal Logic */}
        {isImgModalOpen && (
          <div className="image-modal-overlay" onClick={() => setIsImgModalOpen(false)}>
            <div className="modal-content">
              <button className="close-modal" onClick={() => setIsImgModalOpen(false)}>
                <FaTimes />
              </button>
              <img src={profileImg} alt="full-profile" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}