import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ image, title, description, techs, link, slug, featured = false }) => {
  return (
    <motion.div 
      className={`project-card ${featured ? 'project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <div className="project-card__image-wrapper">
        <div className="project-card__image-container">
          <img 
            src={image} 
            alt={title} 
            className="project-card__image"
            loading="lazy"
          />
          <div className="project-card__image-overlay"></div>
        </div>
      </div>
      
      <div className="project-card__content">
        <div className="project-card__header">
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__description">{description}</p>
        </div>
        
        <div className="project-card__technologies">
          {techs.map((tech, idx) => (
            <span key={idx} className="project-card__tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="project-card__actions">
          {link && link !== '#' ? (
            <a 
              href={link} 
              className="project-card__button project-card__button--primary"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>Voir le projet</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ) : slug ? (
            <Link 
              to={`/projets/${slug}`}
              className="project-card__button project-card__button--secondary"
            >
              <span>Découvrir</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 