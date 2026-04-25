import React, { useState } from "react";
import "./Project.css";
import { FaEye, FaGamepad, FaRobot, FaCode, FaMobileAlt } from "react-icons/fa";
import ResumeImage from "../../assets/Resume.png"; // Import your actual image
import Todo from "../../assets/Todo.png"; // Import your actual image
const projects = [
  {
    id: 1,
    title: "Resume Designer Website",
    category: "Web Development",
    image: ResumeImage,
    icon: <FaCode />,
    link:"https://resume-liard-theta.vercel.app/"
  },
  {
    id: 2,
    title: "Todo App",
    category: "Web Development",
    image: Todo,
    icon: <FaCode />,
    link:"https://todo-frontend-f9gq.vercel.app/"
  },
  // Add more projects based on your screenshots...
];

const Project = () => {
  return (
    <section className="project-section">
      <header className="project-header">
        <h2>Projects</h2>
        <div className="header-underline"></div>
      </header>


      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="image-container">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <div className="view-icon"><FaEye /></div>
              </div>
            </div>
            </a>
            <div className="project-info">
              <h3>{project.title} {project.icon}</h3>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;