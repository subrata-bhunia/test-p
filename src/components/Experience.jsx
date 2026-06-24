import { motion } from 'framer-motion'
import { FiBriefcase, FiMapPin } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { experience } from '../data'
import { fadeUp, staggerContainer } from '../utils/motion'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading eyebrow="03 — Experience" title="Where I've Worked" subtitle="A track record of measurable impact across mobile and full-stack roles." />

      <motion.div
        className="timeline"
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="timeline-line" />
        {experience.map((exp, idx) => (
          <motion.div className="timeline-item" key={idx} variants={fadeUp()}>
            <div className="timeline-marker">
              <span className={`marker-dot ${exp.current ? 'current' : ''}`} />
            </div>
            <div className="timeline-card glass">
              <div className="exp-top">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-meta">
                    <span className="exp-company"><FiBriefcase /> {exp.company}</span>
                    <span className="exp-loc"><FiMapPin /> {exp.location}</span>
                  </div>
                </div>
                <span className={`exp-period ${exp.current ? 'current' : ''}`}>{exp.period}</span>
              </div>
              <ul className="exp-bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="exp-tech">
                {exp.tech.map((t) => (
                  <span className="chip sm" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
