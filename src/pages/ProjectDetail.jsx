import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="project-detail">
        <BackButton onClick={() => navigate(-1)} />
        <div className="project-detail__error">
          <h1>Projet introuvable</h1>
          <p>Le projet que vous recherchez n'existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <BackButton onClick={() => navigate(-1)} />
      
      <motion.main 
        className="project-detail__main"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <section className="project-detail__header">
          <div className="project-detail__container">
            <div className="project-detail__intro">
              <div className="project-detail__meta">
                <span className="project-detail__type">{project.type}</span>
                <span className="project-detail__year">{project.year}</span>
              </div>
              
              <h1 className="project-detail__title">{project.title}</h1>
              
              {project.subtitle && (
                <p className="project-detail__subtitle">{project.subtitle}</p>
              )}
              
              <div className="project-detail__technologies">
                {project.technologies?.map((tech, index) => (
                  <span key={index} className="project-detail__tech">
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.link && project.link !== '#' && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-detail__cta"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Voir le projet
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              )}
            </div>
            
            <div className="project-detail__visual">
              <ProjectShowcase project={project} />
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="project-detail__content">
          <div className="project-detail__container">
            <div className="project-detail__description">
              <h2>À propos du projet</h2>
              <div className="project-detail__text">
                {project.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {project.images && project.images.length > 0 && (
          <section className="project-detail__gallery">
            <div className="project-detail__container">
              <h2>Aperçus</h2>
              <div className="project-detail__images">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="project-detail__image-item"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </motion.main>
    </div>
  );
};

// Back Button Component
const BackButton = ({ onClick }) => (
  <motion.button
    className="project-detail__back"
    onClick={onClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </motion.button>
);

// Project Showcase Component
const ProjectShowcase = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project.images || [];

  if (images.length === 0) {
    return (
      <div className="project-showcase__placeholder">
        <div className="project-showcase__icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
            <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2"/>
            <polyline points="21,15 16,10 5,21" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
};

export default ProjectDetail; 