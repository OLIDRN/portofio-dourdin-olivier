import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import './ProjectDetail.css';

const sectionVariants = [
  { initial: { opacity: 0, y: 60, scale: 0.96 }, whileInView: { opacity: 1, y: 0, scale: 1 } }, // slide up + scale
  { initial: { opacity: 0, x: -60, rotate: -4 }, whileInView: { opacity: 1, x: 0, rotate: 0 } }, // slide left + rotate
  { initial: { opacity: 0, x: 60, scale: 0.92 }, whileInView: { opacity: 1, x: 0, scale: 1 } }, // slide right + scale
  { initial: { opacity: 0, y: 60, rotate: 4 }, whileInView: { opacity: 1, y: 0, rotate: 0 } }, // slide up + rotate
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="project-detail-wrapper">
        <button className="project-detail-back-btn" onClick={() => navigate(-1)} title="Retour">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 28L8 16L20 4" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2>Projet introuvable</h2>
      </div>
    );
  }

  return (
    <div className="project-detail-case-study">
      <button className="project-detail-back-btn" onClick={() => navigate(-1)} title="Retour">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 28L8 16L20 4" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {/* Intro à gauche, images à la suite */}
      <section className="case-study-intro">
        <motion.div
          className="case-study-intro-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="case-study-title">{project.title}</h1>
          <span className="case-study-type">{project.type}</span>
          <span className="case-study-year">{project.year}</span>
          {project.subtitle && <p className="case-study-subtitle">{project.subtitle}</p>}
          <div className="case-study-tech-list">
            {project.technologies && project.technologies.map((tech, idx) => (
              <span className="case-study-tech" key={idx}>{tech}</span>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="case-study-description">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >À propos du projet</motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {project.description.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
        </motion.p>
      </section>
      {/* Liste verticale animée façon Tympanus */}
      {project.images && project.images.length > 0 && project.images.map((img, idx) => (
        <motion.section
          className="case-study-image-section"
          key={idx}
          initial={sectionVariants[idx % sectionVariants.length].initial}
          whileInView={sectionVariants[idx % sectionVariants.length].whileInView}
          transition={{ duration: 0.8, delay: 0.08 * idx, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={img}
            alt={`Screenshot ${idx + 1}`}
            className="case-study-img"
            draggable={false}
          />
        </motion.section>
      ))}
    </div>
  );
};

export default ProjectDetail; 