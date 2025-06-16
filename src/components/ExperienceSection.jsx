import { motion } from 'framer-motion';
import { experiences } from '../data/experiences';
import './ExperienceSection.css';

const ExperienceSection = () => {
  return (
    <section className="exp-section">
      <motion.h2
        className="exp-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Expériences professionnelles
      </motion.h2>
      <div className="exp-timeline">
        {experiences.map((exp, idx) => (
          <motion.div
            className="exp-card"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="exp-header">
              <span className="exp-job">{exp.title}</span>
              <span className="exp-company">{exp.company}</span>
            </div>
            <div className="exp-meta">
              <span className="exp-period">{exp.period}</span>
              <span className="exp-location">{exp.location}</span>
            </div>
            <ul className="exp-desc">
              {exp.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection; 