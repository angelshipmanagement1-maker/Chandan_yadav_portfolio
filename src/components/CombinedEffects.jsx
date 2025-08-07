import React, { useEffect, useRef } from 'react';
import './CombinedEffects.css';

const CombinedEffects = () => {
  const matrixCanvasRef = useRef(null);
  const particleCanvasRef = useRef(null);

  useEffect(() => {
    // Matrix Rain Effect
    const matrixCanvas = matrixCanvasRef.current;
    const matrixCtx = matrixCanvas.getContext('2d');
    
    // Particle Effect
    const particleCanvas = particleCanvasRef.current;
    const particleCtx = particleCanvas.getContext('2d');

    const resizeCanvas = () => {
      // Matrix Canvas
      matrixCanvas.width = window.innerWidth;
      matrixCanvas.height = window.innerHeight;
      
      // Particle Canvas
      particleCanvas.width = window.innerWidth;
      particleCanvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix Rain Variables
    const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = matrixCanvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    // Particle System Variables
    const particles = [];
    const maxParticles = 100;
    let mouse = { x: 0, y: 0 };

    // Particle Class
    class Particle {
      constructor() {
        this.x = Math.random() * particleCanvas.width;
        this.y = Math.random() * particleCanvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.connections = [];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > particleCanvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > particleCanvas.height) this.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          this.vx += (dx / distance) * force * 0.1;
          this.vy += (dy / distance) * force * 0.1;
        }

        // Apply friction
        this.vx *= 0.99;
        this.vy *= 0.99;
      }

      draw() {
        particleCtx.beginPath();
        particleCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        particleCtx.fillStyle = `rgba(0, 255, 255, ${this.opacity})`;
        particleCtx.fill();
        
        // Glow effect
        particleCtx.shadowBlur = 10;
        particleCtx.shadowColor = '#00ffff';
        particleCtx.fill();
        particleCtx.shadowBlur = 0;
      }

      drawConnections() {
        this.connections = [];
        for (let i = 0; i < particles.length; i++) {
          const other = particles[i];
          if (other === this) continue;

          const dx = this.x - other.x;
          const dy = this.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            this.connections.push(other);
            const opacity = (120 - distance) / 120 * 0.3;
            
            particleCtx.beginPath();
            particleCtx.moveTo(this.x, this.y);
            particleCtx.lineTo(other.x, other.y);
            particleCtx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            particleCtx.lineWidth = 1;
            particleCtx.stroke();
          }
        }
      }
    }

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    // Matrix Rain Animation
    const drawMatrix = () => {
      matrixCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

      matrixCtx.fillStyle = '#00ff88';
      matrixCtx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Add glow effect
        matrixCtx.shadowBlur = 10;
        matrixCtx.shadowColor = '#00ff88';
        matrixCtx.fillText(text, x, y);
        matrixCtx.shadowBlur = 0;

        if (y > matrixCanvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Particle Animation
    const drawParticles = () => {
      particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

      // Draw connections first
      particles.forEach(particle => {
        particle.drawConnections();
      });

      // Draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
    };

    // Animation loop
    const animate = () => {
      drawMatrix();
      drawParticles();
      requestAnimationFrame(animate);
    };

    animate();

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="combined-effects">
      <canvas
        ref={matrixCanvasRef}
        className="matrix-canvas"
      />
      <canvas
        ref={particleCanvasRef}
        className="particle-canvas"
      />
      
      {/* Additional cyber effects */}
      <div className="cyber-grid-overlay"></div>
      <div className="scan-lines"></div>
      <div className="holographic-noise"></div>
    </div>
  );
};

export default CombinedEffects;