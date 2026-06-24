import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import { education } from '../data'
import { scaleIn } from '../utils/motion'

export default function Education() {
  return (
    <section className="section section-tight">
      <motion.div
        className="edu-card glass"
        variants={scaleIn()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="edu-icon"><FiBookOpen /></div>
        <div className="edu-info">
          <span className="eyebrow">06 — Education</span>
          <h3>{education.school}</h3>
          <p className="edu-degree">{education.degree}</p>
          <p className="edu-meta">{education.location} · {education.period}</p>
        </div>
      </motion.div>
    </section>
  )
}
