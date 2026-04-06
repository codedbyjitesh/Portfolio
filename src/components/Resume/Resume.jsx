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
      <h2 className="section-title">Jitesh Bind Resume</h2>
      <div className="title-underline"></div>

      {/* Download Button */}
      <a
        href="/Resume_Jitesh_Bind.pdf"
        download="Resume_Jitesh_Bind.pdf"
        className="download-btn"
      >
        <div className="icon-box-small"><Download size={18} /></div>
        <span>Download Resume</span>
      </a>

      {/* Education */}
      <div className="resume-category">
        <div className="category-header">
          <div className="icon-box"><BookOpen /></div>
          <h3>Education</h3>
        </div>

        <div className="timeline">

          <TimelineItem
            company="SM Shetty College"
            title="BSc IT (3rd Year - Pursuing)"
            location="Mumbai (Powai, Hiranandani)"
            date="2023 - Present"
            description={[
              "Currently pursuing Bachelor of Science in Information Technology.",
              "Focused on web development, databases, and programming."
            ]}
          />

          <TimelineItem
            company="Shivaji Technical College"
            title="Science Stream (HSC)"
            location="Mumbai(Ghatkopar)"
            date="2021 - 2023"
            description={[
              "Completed higher secondary education in science."
            ]}
          />

          <TimelineItem
            company="St. Joseph High School"
            title="SSC (10th)"
            location="Mumbai (Vikhroli)"
            date="Completed"
            description={[
              "Completed secondary education."
            ]}
            isLast={true}
          />

        </div>
      </div>

      {/* Training / Certification */}
      <div className="resume-category">
        <div className="category-header">
          <div className="icon-box"><Award /></div>
          <h3>Training & Certifications</h3>
        </div>

        <div className="timeline">
          <TimelineItem
            company="TechPathshala"
            title="Python Full Stack Development"
            location="Mumbai"
            date="Completed"
            description={[
              "Learned Python basics and backend concepts.",
              "Worked on forms, databases, and web development fundamentals."
            ]}
            isLast={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;