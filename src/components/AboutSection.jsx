import { motion } from 'framer-motion';
import './AboutSection.css';

const infos = [
  { icon: '/svg/location.svg', label: 'La Couture, Hauts-de-France' },
  { icon: '/svg/briefcase.svg', label: 'Alternance recherchée' },
  { icon: '/svg/graduation.svg', label: 'BUT Informatique' },
];

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

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        À propos
      </motion.h2>
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="about-text-block">
          <p className="about-text">
            Actuellement en 3ᵉ année de BUT Informatique, je suis alternant développeur web et back-end chez Viously à Lille. Curieux, rigoureux et passionné par le développement, j'interviens sur des projets concrets en environnement professionnel. Je suis à la recherche d'une nouvelle alternance à partir de septembre 2025 pour intégrer un master en informatique et continuer à approfondir mes compétences techniques tout en contribuant à des projets à fort impact.
          </p>
          <div className="about-infos">
            {infos.map((info, idx) => (
              <span className="about-info-tag" key={idx}>
                <img src={info.icon} alt="" className="about-info-icon" />
                {info.label}
              </span>
            ))}
          </div>
          <div className="about-actions">
            <a href="/cv-olivier.pdf" className="about-btn" download>
              Télécharger mon CV
            </a>
            <a href="mailto:olivierdourdin148@gmail.com" className="about-btn about-btn-outline">
              Me contacter
            </a>
            <a href="/about" className="about-btn about-btn-secondary">
              En savoir +
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection; 