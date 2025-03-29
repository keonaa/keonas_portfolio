'use client';
import { useState } from 'react';
import FAQItem from './FAQItem';

const faqData = [
  {
    question: "What is Keona's go-to drink?",
    answer: "Depending on the kind of energy the day needs, an iced vanilla oat latte or a strawberry apricot Redbull",
    type: "fade",
    images: [
      "/assets/redbull.png",
      "/assets/redbull.png",
      "/assets/iced-latte.png",
      "/assets/iced-latte.png"
    ]
  },
  {
    question: "What is a random skill Keona has?",
    answer: "If you give me a Rubik's cube, I'll have solved in under a minute. It's like a quick mental reset, but with more colors",
    type: "fade",
    images: [
      "/assets/rubiks-cube1.png",
      "/assets/rubiks-cube2.png"
    ]
  },
  {
    question: "Why should you work with Keona?",
    answer: "I thrive on collaboration, creativity, and building ideas together. I lover working with people who bring different perspectives, turning a simple concept into something even better. Whether it's brainstorming new ideas or refining the smallest details, I bring enthusiasm, adaptability, and a strong creative vision to every project",
    type: "scale"
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          index={index}
          isActive={activeIndex === index}
          setActiveIndex={setActiveIndex}
          {...item}
        />
      ))}
    </section>
  );
}
