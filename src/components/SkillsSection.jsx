import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import './SkillsSection.css';

const categories = Array.from(new Set(skills.map(s => s.category)));

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-section__container">
        <motion.h2
          className="skills-section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Mes compétences
        </motion.h2>
        
        <div className="skills-section__categories">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              className="skills-category"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="skills-category__title">{category}</h3>
              
              <div className="skills-category__grid">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      delay={skillIndex * 0.1}
                    />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skill Card Component
const SkillCard = ({ skill, delay }) => {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="skill-card__icon">
        <img 
          src={skill.icon} 
          alt={skill.name} 
          className="skill-card__image"
        />
      </div>
      
      <div className="skill-card__content">
        <h4 className="skill-card__name">{skill.name}</h4>
        
        <div className="skill-card__progress">
          <div className="skill-card__progress-bar">
            <motion.div
              className="skill-card__progress-fill"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
          <span className="skill-card__level">{skill.level}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsSection; 