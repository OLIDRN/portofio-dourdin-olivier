import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProjectHero.css';

const ProjectHero = ({ title, subtitle, image, link, slug, type, year }) => {
  const renderHighlightedText = (text) => {
    if (!text) return '';
    
    const highlightWords = ['une', 'un', 'engagée', 'engagé', 'moderne', 'innovante', 'créative'];
    const words = text.split(' ');
    
    return words.map((word, index) => {
      const cleanWord = word.replace(/[.,!?;:]/, '');
      const punctuation = word.replace(cleanWord, '');
      const isHighlighted = highlightWords.includes(cleanWord.toLowerCase());
      
      return (
        <span key={index}>
          {isHighlighted ? (
            <span className="project-hero__title-highlight">
              {cleanWord}
            </span>
          ) : (
            cleanWord
          )}
          {punctuation}
          {index < words.length - 1 ? ' ' : ''}
        </span>
      );
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 60 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="project-hero">
      <motion.div 
        className="project-hero__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="project-hero__content">
          <motion.div 
            className="project-hero__text-section"
            variants={itemVariants}
          >
            <div className="project-hero__meta">
              {type && <span className="project-hero__type">{type}</span>}
              {year && <span className="project-hero__year">{year}</span>}
            </div>

            <h1 className="project-hero__project-name">
              {title}
            </h1>

            <h2 className="project-hero__title">
              {renderHighlightedText(subtitle)}
            </h2>

            <div className="project-hero__actions">
              {link && link !== '#' ? (
                <a 
                  href={link}
                  className="project-hero__button project-hero__button--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="project-hero__button-text">Voir le projet</span>
                  <div className="project-hero__button-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M7 17L17 7M17 7H7M17 7V17" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              ) : slug ? (
                <Link 
                  to={`/projets/${slug}`}
                  className="project-hero__button project-hero__button--secondary"
                >
                  <span className="project-hero__button-text">Découvrir</span>
                  <div className="project-hero__button-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M9 18L15 12L9 6" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              ) : null}
            </div>
          </motion.div>

          <motion.div 
            className="project-hero__image-section"
            variants={imageVariants}
          >
            <div className="project-hero__image-container">
              <div className="project-hero__image-wrapper">
                <img 
                  src={image} 
                  alt={title}
                  className="project-hero__image"
                  loading="eager"
                />
                <div className="project-hero__image-overlay"></div>
              </div>
              <div className="project-hero__image-decoration"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectHero; 