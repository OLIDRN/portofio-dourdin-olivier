import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import './AboutPage.css';

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/olivierdourdin',
    icon: '/src/assets/svg/github.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/olivierdourdin/',
    icon: '/src/assets/svg/linkedin.svg',
  },
  {
    name: 'Email',
    url: 'mailto:olivierdourdin148@gmail.com',
    icon: '/src/assets/svg/mail.svg',
  },
];

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="aboutpage-wrapper">
      <button className="aboutpage-back-btn" onClick={() => navigate(-1)} title="Retour">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 28L8 16L20 4" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <motion.h1
        className="aboutpage-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        À propos de moi
      </motion.h1>
      <div className="aboutpage-header">
        <div className="aboutpage-text-block">
          <p className="aboutpage-text">
            Actuellement en 3ᵉ année de BUT Informatique, je suis alternant développeur web et back-end chez Viously à Lille. Curieux, rigoureux et passionné par le développement, j'interviens sur des projets concrets en environnement professionnel. Je suis à la recherche d'une nouvelle alternance à partir de septembre 2025 pour intégrer un master en informatique et continuer à approfondir mes compétences techniques tout en contribuant à des projets à fort impact.
          </p>
          <div className="aboutpage-actions">
            <a href="/cv-olivier.pdf" className="about-btn" download>
              Télécharger mon CV
            </a>
            <a href="mailto:olivierdourdin148@gmail.com" className="about-btn about-btn-outline">
              Me contacter
            </a>
          </div>
        </div>
        <div className="aboutpage-socials">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              className="about-social-link"
              target="_blank"
              rel="noopener noreferrer"
              title={s.name}
            >
              <img src={s.icon} alt={s.name} className="about-social-icon" />
            </a>
          ))}
        </div>
      </div>
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
};

export default AboutPage; 