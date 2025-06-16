import { useEffect, useRef } from 'react';

const NUM_PARTICLES = 100;

const random = (min, max) => Math.random() * (max - min) + min;

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    particles.current = Array.from({ length: NUM_PARTICLES }, () => ({
      x: random(0, width),
      y: random(0, height),
      r: random(1.5, 4),
      dx: random(-0.2, 0.2),
      dy: random(-0.2, 0.2),
      opacity: random(0.2, 0.7),
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(106,130,251,${p.opacity})`;
        ctx.shadowColor = '#6a82fb';
        ctx.shadowBlur = 16;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      }
      requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticlesBackground; 