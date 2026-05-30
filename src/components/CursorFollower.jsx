import React, { useEffect, useRef, useState } from 'react';
import '../styles/CursorFollower.css';

export const CursorFollower = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let frameCount = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      frameCount++;
      if (frameCount % 2 === 0) {
        setTrail((prevTrail) => {
          const newTrail = [...prevTrail, { x: mouseX, y: mouseY, id: Date.now() + Math.random() }];
          return newTrail.slice(-12);
        });
      }

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = mouseX + 'px';
        cursorDotRef.current.style.top = mouseY + 'px';
      }

      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('interactive') ||
        target.closest('a') ||
        target.closest('button');
      
      setIsHovering(isInteractive);
    };

    const animateCursor = () => {
      if (cursorRef.current) {
        cursorX += (mouseX - cursorX) * 0.18;
        cursorY += (mouseY - cursorY) * 0.18;
        cursorRef.current.style.left = cursorX + 'px';
        cursorRef.current.style.top = cursorY + 'px';
      }
      requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', () => setIsHovering(false));
    
    animateCursor();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', () => setIsHovering(false));
    };
  }, []);

  return (
    <>

      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: point.x + 'px',
            top: point.y + 'px',
            opacity: (index / trail.length) * 0.6,
          }}
        />
      ))}
    </>
  );
};

export default CursorFollower;
