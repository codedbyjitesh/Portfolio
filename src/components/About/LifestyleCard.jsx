import React from 'react';
import "./lifestyleCard.css";
const LifestyleCard = ({ Icon, title, desc }) => {
  return (
    <div className="lifestyle-card">
      <div className="card-header">
        <div className="card-icon">
          {/* This renders the specific Lucide icon component */}
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <h3>{title}</h3>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default LifestyleCard;