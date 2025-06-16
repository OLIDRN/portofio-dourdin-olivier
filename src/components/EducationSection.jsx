import { motion } from 'framer-motion';
import { education } from '../data/education';
import './EducationSection.css';

const EducationSection = () => {
  return (
    <section className="edu-section">
      <motion.h2
        className="edu-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Parcours scolaire
      </motion.h2>
      <div className="edu-timeline">
        {education.map((edu, idx) => (
          <motion.div
            className="edu-card"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="edu-header">
              <span className="edu-degree">{edu.degree}</span>
              <span className="edu-school">{edu.school}</span>
            </div>
            <div className="edu-meta">
              <span className="edu-period">{edu.period}</span>
              <span className="edu-location">{edu.location}</span>
            </div>
            {edu.details && <div className="edu-details">{edu.details}</div>}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection; 