import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import './SkillsSection.css';

const categories = Array.from(new Set(skills.map(s => s.category)));

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Mes compétences
      </motion.h2>
      <div className="skills-categories">
        {categories.map((cat) => (
          <div className="skills-category-block" key={cat}>
            <h3 className="skills-category-title">{cat}</h3>
            <div className="skills-grid">
              {skills.filter(s => s.category === cat).map((skill, idx) => (
                <motion.div
                  className="skill-card"
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.07 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-icon-block">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar-bg">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level + '%' }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection; 