import { useState } from 'react';

export default function Carousel({ slides = [] }) {
  const [index, setIndex] = useState(0);
  if (slides.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const slide = slides[index];

  return (
    <div className="carousel card" role="region" aria-label="공연 슬라이드">
      <div className="carousel-slide">
        <img src={slide.image} alt={slide.title} />
        <div className="carousel-caption">
          <strong>{slide.title}</strong>
          <span>{slide.caption}</span>
        </div>
      </div>
      <div className="carousel-controls">
        <button className="button" onClick={prev} aria-label="이전">〈</button>
        <span className="carousel-indicator">{index + 1} / {slides.length}</span>
        <button className="button" onClick={next} aria-label="다음">〉</button>
      </div>
    </div>
  );
} 