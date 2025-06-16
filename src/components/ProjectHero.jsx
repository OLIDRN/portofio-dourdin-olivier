import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProjectHero.css';

const ProjectHero = ({ title, subtitle, image, link, slug }) => {
  return (
    <section className="project-hero-section">
      <div className="project-hero-content">
        <motion.div 
          className="project-hero-text"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <span className="project-hero-label">{title}</span>
          <h2 className="project-hero-title">
            {subtitle.split(/(une|un|engagée\.|engagé\.)/).map((part, i) =>
              part === 'une' || part === 'un' || part === 'engagée.' || part === 'engagé.' ? (
                <span key={i} className="project-hero-title-outline">{part}</span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h2>
          <Link to={`/projets/${slug}`} className="project-hero-btn">
            <span className="circle-text">Voir</span>
            <svg className="circle-svg" width="90" height="90" viewBox="0 0 90 90">
              <circle cx="45" cy="45" r="42" fill="none" stroke="#fc5c7d" strokeWidth="1.5" />
            </svg>
          </Link>
        </motion.div>
        <motion.div 
          className="project-hero-image-block"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img src={image} alt={title} className="project-hero-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero; 