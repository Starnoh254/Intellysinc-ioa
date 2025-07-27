import React from "react";
import "../styles/Book2NetHero.css";
// Placeholder image; replace with your own Book2Net product image if available
const cameraImg = "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80";

export default function Book2NetHero() {
  return (
    <section className="book2net-hero-grid">
      {/* Left: Main Image & Text */}
      <div className="hero-main-grid">
        <div className="hero-image-container" style={{backgroundImage: 'url(/images/book2net/hero.jpg)'}}>
          <div className="hero-overlay-content">
            <h1 className="hero-title">M150 CAMERA</h1>
            <p className="hero-desc">
              The new M150 is the first 150 megapixel camera to combine unique image quality with high productivity. By using the latest generation image sensor with global shutter, the M150 offers an attractive combination of high frame rate and impressive dynamic range.
            </p>
            <button className="hero-cta">DISCOVER NOW</button>
          </div>
        </div>
      </div>
      {/* Right: Info Cards */}
      <div className="hero-sidebar">
        <div className="sidebar-card">
          <span className="sidebar-bold">OVER <span className="sidebar-red">5100</span><br />INSTALLATIONS<br />WORLDWIDE</span>
        </div>
        <div className="sidebar-card">
          <span className="sidebar-bold">MADE IN GERMANY</span>
        </div>
        <div className="sidebar-card">
          <span className="sidebar-bold">
            9 out of 10<br />of the world's largest<br />libraries, archives & museums are using <span className="sidebar-red">book2net</span>
          </span>
        </div>
      </div>
    </section>
  );
}
