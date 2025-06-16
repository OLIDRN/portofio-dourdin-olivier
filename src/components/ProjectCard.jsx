import './ProjectCard.css';

const ProjectCard = ({ image, title, description, techs, link }) => {
  return (
    <div className="project-card">
      <div className="project-card-img-wrapper">
        <img src={image} alt={title} className="project-card-img" />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{description}</p>
        <div className="project-card-techs">
          {techs.map((tech, idx) => (
            <span className="project-card-tech" key={idx}>{tech}</span>
          ))}
        </div>
        {link && (
          <a href={link} className="project-card-btn" target="_blank" rel="noopener noreferrer">
            Voir le projet
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 