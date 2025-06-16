import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectsGallery.css';

const ProjectsGallery = () => {
  const navigate = useNavigate();
  return (
    <div className="gallery-wrapper">
      <button className="gallery-back-btn" onClick={() => navigate(-1)} title="Retour">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 28L8 16L20 4" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <motion.h1
        className="gallery-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Tous mes projets
      </motion.h1>
      <div className="gallery-grid">
        {projects.map((project, idx) => (
          <motion.div
            className="gallery-card"
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="gallery-card-type">{project.type}</span>
            <img src={project.image} alt={project.title} className="gallery-card-img" />
            <span className="gallery-card-title">{project.title}</span>
            <span className="gallery-card-year">{project.year}</span>
            {project.award && <span className="gallery-card-award">award</span>}
            <a className="gallery-card-view-btn" href={project.link} target="_blank" rel="noopener noreferrer">
              <span className="circle-text">Voir</span>
              <svg className="circle-svg" width="70" height="70" viewBox="0 0 70 70">
                <circle cx="35" cy="35" r="32" fill="none" stroke="#7c3aed" strokeWidth="2" />
              </svg>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGallery; 