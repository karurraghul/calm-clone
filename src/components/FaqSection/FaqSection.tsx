import { useState } from 'react';
import { faqItems } from '../../data/mockData';
import './FaqSection.css';

// Get unique categories from the faqItems
const categories = Array.from(new Set(faqItems.map(item => item.category)));

const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setActiveItemId(activeItemId === id ? null : id);
  };

  const filterItemsByCategory = () => {
    return faqItems.filter(item => item.category === activeCategory);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about Calm and how it works
          </p>
        </div>

        <div className="faq-tabs">
          {categories.map(category => (
            <button
              key={category}
              className={`faq-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="faq-accordion">
          {filterItemsByCategory().map(item => (
            <div key={item.id} className="faq-item">
              <button
                className={`faq-question ${activeItemId === item.id ? 'active' : ''}`}
                onClick={() => toggleItem(item.id)}
                aria-expanded={activeItemId === item.id}
              >
                {item.question}
                <span className="faq-icon"></span>
              </button>
              <div
                className={`faq-answer ${activeItemId === item.id ? 'active' : ''}`}
              >
                <div className="faq-answer-content">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <p>Still have questions?</p>
          <a href="/contact" className="btn btn-primary">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;