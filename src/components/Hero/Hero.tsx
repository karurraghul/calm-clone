import { useState, useEffect } from 'react';
import { testimonials } from '../../data/mockData';
import './Hero.css';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsLoading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (index !== activeIndex) {
      setIsLoading(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Find your calm</h1>
          <p className="hero-subtitle">
            Reduce stress, anxiety, and improve focus with guided meditation, sleep stories, and relaxing music
          </p>
          <div className="hero-cta">
            <a href="/signup" className="btn btn-primary">
              Start your free trial
            </a>
          </div>
        </div>

        <div className="testimonial-carousel">
          <div className="testimonial-header">
            <div className="stars">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <p className="testimonial-title">Over 2 million 5-star reviews</p>
            
            <div className={`testimonial-loader ${isLoading ? 'loading' : ''}`}>
              <div className="loader-track">
                <div className="loader-fill"></div>
              </div>
            </div>
          </div>

          <div className="testimonial-slides">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-slide ${index === activeIndex ? 'active' : ''}`}
              >
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-author">— {testimonial.author}</p>
              </div>
            ))}
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;