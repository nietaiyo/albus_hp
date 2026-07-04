'use client';

import { useEffect, useState } from 'react';

export default function MouseSpotlight() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!coords.x && !coords.y) return null;

  return (
    <div
      className={`mouseSpotlight ${isVisible ? 'visible' : ''}`}
      style={{
        left: `${coords.x}px`,
        top: `${coords.y}px`,
      }}
    />
  );
}
