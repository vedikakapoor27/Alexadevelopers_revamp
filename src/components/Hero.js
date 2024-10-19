import React, { useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const createDots = (num) => {
    const dots = [];
    for (let i = 0; i < num; i++) {
      const dotStyle = {
        width: `${Math.random() * 20 + 10}px`,  // Random size between 10px and 30px
        height: `${Math.random() * 20 + 10}px`,
        top: `${Math.random() * 100}vh`,  // Random vertical position
        left: `${Math.random() * 100}vw`,  // Random horizontal position
        animationDuration: `${Math.random() * 3 + 3}s`,  // Random duration between 3s and 6s
      };
      dots.push(<div className="dot" style={dotStyle} key={i} />);
    }
    return dots;
  };

  return (
    <div className="hero">
      {createDots(30)} {/* Adjust number of dots here */}
      <h1>Welcome to Alexaverse</h1>
      <p>Join us and be part of something amazing!</p>
      <button>Get Started</button>
    </div>
  );
};

export default Hero;
