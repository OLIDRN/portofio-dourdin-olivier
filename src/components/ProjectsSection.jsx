import { motion } from 'framer-motion';
import ProjectHero from './ProjectHero';
import { projects } from '../data/projects';
import './ProjectsSection.css';

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
          type={project.type}
          year={project.year}
        />
      ))}
      
      <div className="see-more-projects-wrapper">
        <a href="/projets" className="see-more-projects-btn">
          Voir + de projets
        </a>
      </div>

    </section>
  );
};

export default ProjectsSection; 