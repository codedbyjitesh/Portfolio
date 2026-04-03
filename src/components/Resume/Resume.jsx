import React from 'react';
import { Briefcase, BookOpen, Award, Download } from 'lucide-react';
import './resume.css';

const TimelineItem = ({ title, company, date, location, description, isLast }) => (
  <div className="timeline-item">
    <div className="timeline-dot"></div>
    {!isLast && <div className="timeline-line"></div>}
    <div className="timeline-content">
      <div className="item-header">
        <div>
          <h4 className="item-company">{company}</h4>
          <h5 className="item-title">{title}</h5>
        </div>
        <div className="item-meta">
          <span className="item-location">📍 {location}</span>
          <span className="item-date">📅 {date}</span>
        </div>
      </div>
      <ul className="item-description">
        {description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Resume = () => {
  return (
    <div className="resume-section">
      <h2 className="section-title">Amine Resume</h2>
      <div className="title-underline"></div>

      {/* Download Button */}
      <a href="/path-to-your-resume.pdf" className="download-btn" download>
        <div className="icon-box-small"><Download size={18} /></div>
        <span>Download Amine full Curriculum Vitae/Resume (October 2025)</span>
      </a>

      {/* Professional Experience */}
      <div className="resume-category">
        <div className="category-header">
          <div className="icon-box"><Briefcase /></div>
          <h3>Professional Experience</h3>
        </div>
        <div className="timeline">
          <TimelineItem 
            company="Disydev" 
            title="AI Engineer" 
            location="Algeria" 
            date="Oct. 2024 - Sep. 2025"
            description={[
              "Developed a medical conversational agent based on LLMs and RAG (Retrieval-Augmented Generation).",
              "Designed and optimized supervised classification models for pathology detection.",
              "Implemented a comprehensive medical platform using Django and microservices architecture.",
              "Created an ETL pipeline integrating OCR, data cleaning, and structuring of medical data."
            ]}
          />
          <TimelineItem 
            company="Buildingo Labs" 
            title="AI/ML Engineer specializing in Mobile Applications" 
            location="Canada" 
            date="Jun 2024"
            description={[
              "Developed a Flutter-based mobile application with a user-friendly interface.",
              "Created an AI recommendation system leveraging user data for personalization.",
              "Collaborated with backend teams to optimize API performance."
            ]}
          />
          <TimelineItem 
            company="Icosnet" 
            title="Machine Learning Engineer" 
            location="Algeria" 
            date="Sep. 2023 - Jun. 2024"
            description={[
              "Création d'un pipeline : extraction, nettoyage, visualisation des données.",
              "Classification de tickets clients avec RNN (LSTM, GRU) et BERT.",
              "Implémentation d'un OCR avec CRNN et EAST.",
              "Développement d'agents RAG avancés pour la génération de réponses."
            ]}
            isLast={true}
          />
        </div>
      </div>

      {/* Education Section */}
      <div className="resume-category">
        <div className="category-header">
          <div className="icon-box"><BookOpen /></div>
          <h3>Education</h3>
        </div>
        <div className="timeline">
          <TimelineItem 
            company="Université Paris-Saclay" 
            title="Master — Réalité Virtuelle et Systèmes Intelligents" 
            location="Paris, Algeria" 
            date="Sep. 2025 - Present"
            description={["Focus: Virtual reality, intelligent systems, human-computer interaction."]}
          />
          <TimelineItem 
            company="USTHB" 
            title="Master's Degree in Computer Vision" 
            location="Algeria" 
            date="Sep. 2022 - Jun. 2024"
            description={["Advanced Algorithms, AI, Data Mining, and Deep Learning."]}
            isLast={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;