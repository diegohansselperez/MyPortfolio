import React, { useEffect, useState } from 'react';

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();
  }, []);

  const generateStars = () => {
    const numbersOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 9000,
    );

    const newStars = [];
    for (let i = 0; i < numbersOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animation: Math.random() * 4 + 2,
        /* flujo randoma de cual estrella brilla */
        isAnimating: Math.random() > 0.85,
        animationDelay: Math.random() * 5 + 's',
      });
    }
    setStars(newStars);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => {
        return (
          <div
            key={star.id}
            className="star animate-pulse-subtle "
            style={{
              width: star.size + 'px',
              height: star.size + 'px',
              left: star.x + '%',
              top: star.y + '%',
              opacity: star.opacity,
              animationDuration: star.animation + 's',
            }}
          />
        );
      })}
    </div>
  );
};

export default StarBackground;
