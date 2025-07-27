import { useState } from "react";
import "../styles/HeroGridSlider.css";

const slides = [
  ["Slide 1 - Item 1", "Slide 1 - Item 2", "Slide 1 - Item 3"],
  ["Slide 2 - Item 1", "Slide 2 - Item 2", "Slide 2 - Item 3"],
  ["Slide 3 - Item 1", "Slide 3 - Item 2", "Slide 3 - Item 3"],
];

export default function HeroGridSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="hero-section">
      <h1 className="hero-title">Welcome to Our Platform</h1>

      <div className="slider-controls">
        <button onClick={prev}>⟨</button>
        <span>{`Slide ${currentSlide + 1}`}</span>
        <button onClick={next}>⟩</button>
      </div>

      <div className="grid-container">
        {slides[currentSlide].map((item, index) => (
          <div className="grid-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
