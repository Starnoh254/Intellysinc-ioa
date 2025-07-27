import React from 'react';
import '../styles/Scan2X.css';

export default function FeatureCard({ title, content, icon }) {
  return (
    <div
      className="scan2x-feature-card"
      tabIndex={0}
      role="button"
      aria-expanded={false}
    >
      <div className="scan2x-feature-card-header">
        <span className="scan2x-feature-card-icon">{icon}</span>
        <span className="scan2x-feature-card-title">{title}</span>
      </div>
      <div className="scan2x-feature-card-content">
        <p>{content}</p>
      </div>
    </div>
  );
}
