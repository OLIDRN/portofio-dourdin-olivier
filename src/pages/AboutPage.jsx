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
    icon: '/svg/github.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/olivierdourdin/',
    icon: '/svg/linkedin.svg',
  },
  {
    name: 'Email',
    url: 'mailto:olivierdourdin148@gmail.com',
    icon: '/svg/mail.svg',
  },
];

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <BackButton onClick={() => navigate(-1)} />
      
      <motion.main 
        className="about-page__main"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <section className="about-page__hero">
          <div className="about-page__container">
            <motion.h1 
              className="about-page__title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              À propos de moi
            </motion.h1>
            
            <div className="about-page__content">
              <motion.div 
                className="about-page__intro"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="about-page__text">
                  Actuellement en 3ᵉ année de BUT Informatique, je suis alternant développeur web et back-end chez Viously à Lille. Curieux, rigoureux et passionné par le développement, j'interviens sur des projets concrets en environnement professionnel.
                </p>
                
                <p className="about-page__text">
                  Je suis à la recherche d'une nouvelle alternance à partir de septembre 2025 pour intégrer un master en informatique et continuer à approfondir mes compétences techniques tout en contribuant à des projets à fort impact.
                </p>
                
                <div className="about-page__actions">
                  <motion.a
                    href="/cv-olivier.pdf"
                    className="about-page__cta about-page__cta--primary"
                    download
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Télécharger mon CV
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </motion.a>
                  
                  <motion.a
                    href="mailto:olivierdourdin148@gmail.com"
                    className="about-page__cta about-page__cta--secondary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Me contacter
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div 
                className="about-page__socials"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="about-page__socials-title">Retrouvez-moi</h3>
                <div className="about-page__socials-list">
                  {socials.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className="about-page__social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img 
                        src={social.icon} 
                        alt={social.name} 
                        className="about-page__social-icon" 
                      />
                      <span className="about-page__social-name">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sections */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SkillsSection />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ExperienceSection />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <EducationSection />
        </motion.div>
      </motion.main>
    </div>
  );
};

// Back Button Component
const BackButton = ({ onClick }) => (
  <motion.button
    className="about-page__back"
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

export default AboutPage; 