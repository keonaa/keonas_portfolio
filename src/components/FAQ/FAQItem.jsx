'use client';
import { useEffect, useState } from 'react';
import '@/styles/FAQ.css';

export default function FAQItem({
  index,
  isActive,
  setActiveIndex,
  question,
  answer,
  type,
  images = [],
}) {
  const [triggerFall, setTriggerFall] = useState(false);
  const [triggerConfetti, setTriggerConfetti] = useState(false);

  const handleClick = () => {
    if (isActive) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);

      // trigger for question 2
      if (index === 1 && type === 'fade') {
        setTriggerFall(false);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTriggerFall(true);
          });
        });
      }

      // trigger for question 3
      if (index === 2) {
        setTriggerConfetti(true);
        setTimeout(() => setTriggerConfetti(false), 3000);
      }
    }
  };

  return (
    <div className="faq-item-wrapper">
      {/* question 3 */}
      {index === 2 && triggerConfetti && (
        <img
          src="/assets/confetti.gif"
          alt="Confetti"
          className="confetti-gif"
        />
      )}

      <div
        className={`faq-item ${isActive ? 'open' : ''} ${type}`}
        onClick={handleClick}
      >
        <div className="faq-question">
          <h3>{question}</h3>
          <span className={`arrow ${isActive ? 'rotate' : ''}`}>▲</span>
        </div>
        <div className="faq-answer">{answer}</div>
      </div>

      {/* question 1 */}
      {images.length > 0 && index === 0 && (
        <div className={`faq-float-images ${isActive ? 'show' : ''}`}>
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt=""
              className={`float-img float-img-${idx}`}
            />
          ))}
        </div>
      )}

      {/* question 2*/}
      {images.length > 0 && index === 1 && isActive && triggerFall && (
        <div className="faq-fall-images show">
          {images.map((src, idx) => (
            <img
              key={`${triggerFall}-${idx}`}
              src={src}
              alt=""
              className={`fall-img fall-img-${idx}`}
            />
          ))}
        </div>
      )}

    </div>
  );
}
