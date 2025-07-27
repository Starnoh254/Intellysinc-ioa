import { useState } from "react";
import "../styles/HeroGridHover.css";

const tabs = ["Overview", "Features", "Benefits"];

const slides = {
  Overview: ["Welcome!", "Introduction", "Overview content"],
  Features: ["Fast", "Secure", "User-Friendly"],
  Benefits: ["Save Time", "Boost Productivity", "Enhance Experience"],
};

export default function HeroGridHover() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="hero-section">
      <h1 className="hero-title">Explore Our Platform</h1>

      {/* Hover Tabs */}
      <div className="hover-tabs">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab-item${activeTab === tab ? " active" : ""}`}
            onMouseEnter={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Grid View */}
      <div className="grid-container">
        {slides[activeTab].map((item, index) => (
          <div className="grid-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
