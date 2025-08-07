import React, { useEffect, useRef } from 'react';
import './MatrixRain.css';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (including some maritime/tech symbols)
    const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ⚓🌊⛵🚢📡🔧⚙️💻📊🔒🛡️';
    const chars = matrixChars.split('');

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    // Colors for different types of data
    const colors = [
      'rgba(0, 255, 255, 0.8)',    // Cyan - main data
      'rgba(0, 255, 136, 0.6)',    // Electric green - system data
      'rgba(255, 0, 128, 0.4)',    // Neon pink - alerts
      'rgba(0, 200, 255, 0.5)',    // Blue - secondary data
    ];

    const draw = () => {
      // Create trailing effect
      ctx.fillStyle = 'rgba(10, 15, 28, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Space Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Random color with weighted probability
        let color;
        const rand = Math.random();
        if (rand < 0.6) {
          color = colors[0]; // Most common - cyan
        } else if (rand < 0.8) {
          color = colors[1]; // Green
        } else if (rand < 0.95) {
          color = colors[2]; // Pink
        } else {
          color = colors[3]; // Blue
        }

        ctx.fillStyle = color;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly or when it reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 50);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-rain"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.3,
      }}
    />
  );
};

export default MatrixRain;