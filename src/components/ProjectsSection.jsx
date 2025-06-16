import { motion } from 'framer-motion';
import ProjectHero from './ProjectHero';
import { projects } from '../data/projects';
import './ProjectsSection.css';

const ProjectCard = ({ title, description, image, technologies }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8, scale: 1.025 }}
    >
      <div className="project-card-img-wrapper">
        <img src={image} alt={title} className="project-card-img" />
        <div className="project-card-img-gradient" />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{description}</p>
        <div className="project-card-techs">
          {technologies.map((tech, index) => (
            <span key={index} className="project-card-tech">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const featuredProjects = projects.filter(p => p.featured);
  return (
    <section className="projects-section" id="projects">
      <motion.h2
        className="projects-main-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Mes projets
      </motion.h2>
      {featuredProjects.map((project, idx) => (
        <ProjectHero
          key={idx}
          title={project.title}
          subtitle={project.subtitle || ''}
          image={project.image}
          link={project.link}
          slug={project.slug}
        />
      ))}
      <div className="see-more-projects-wrapper">
        <a href="/projets" className="see-more-projects-btn">
          Voir + de projets
        </a>
      </div>
      <div className="scroll-indicator">
        <span className="scroll-arrow" />
      </div>
    </section>
  );
};

export default ProjectsSection; 