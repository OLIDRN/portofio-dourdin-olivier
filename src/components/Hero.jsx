import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const cardRef = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);
  const [isHover, setIsHover] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseMove = (e) => {
    if (!isHover) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    x.set(0.5);
    y.set(0.5);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <section className="hero-section">
      <motion.nav
        className="hero-navbar sticky"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className="hero-navbar-logo">
          <span className="hero-navbar-avatar">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="url(#avatar-gradient)" />
              <ellipse cx="16" cy="13.5" rx="6.5" ry="6.5" fill="#fff" fillOpacity="0.95" />
              <ellipse cx="16" cy="25" rx="9" ry="5" fill="#fff" fillOpacity="0.7" />
              <defs>
                <linearGradient id="avatar-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6a82fb" />
                  <stop offset="1" stopColor="#fc5c7d" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          Olivier Dourdin
        </span>

        {/* Menu desktop */}
        <ul className="hero-navbar-links desktop-menu">
          <li><Link to="/projets"><span className="nav-icon">📁</span> Projets</Link></li>
          <li><Link to="/about"><span className="nav-icon">👤</span> À propos</Link></li>
        </ul>

        {/* Bouton burger mobile */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        {/* Menu mobile */}
        <motion.div 
          className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            y: isMobileMenuOpen ? 0 : -20
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <ul className="mobile-menu-links">
            <li><Link to="/projets" onClick={closeMobileMenu}><span className="nav-icon">📁</span> Projets</Link></li>
            <li><Link to="/about" onClick={closeMobileMenu}><span className="nav-icon">👤</span> À propos</Link></li>
          </ul>
        </motion.div>
      </motion.nav>

      {/* Overlay pour fermer le menu en cliquant à côté */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
      )}

      <div className="hero-halo-bg" />
      <motion.div
        className="hero-center-card"
        ref={cardRef}
        style={{
          rotateX: isHover ? rotateX : 0,
          rotateY: isHover ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="hero-img-block"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-img-wrapper">
            <img src="/olivier.jpg" alt="Olivier" className="hero-img" />
            <div className="hero-img-gradient" />
          </div>
        </motion.div>
        <motion.div
          className="hero-text-block"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="hero-title">
            <span>Olivier Dourdin</span>
          </h1>
          <h2 className="hero-subtitle">Développeur full-stack</h2>
          <p className="hero-desc">
            Bienvenue sur mon portfolio !
            Vous pouvez découvrir mes supers projets ou en apprendre un peu plus sur moi.
          </p>
          <Link to="/projets" className="hero-btn">Voir mes projets</Link>
        </motion.div>
      </motion.div>
      <div className="scroll-indicator">
        <span className="scroll-arrow" />
      </div>
    </section>
  );
};

export default Hero; 