import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCalendar } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { projects } from '../data'
import { fadeUp, staggerContainer } from '../utils/motion'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading eyebrow="04 — Projects" title="Featured Work" subtitle="Selected projects showcasing mobile engineering and secure architecture." />

      <motion.div
        className="projects-grid"
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((p) => (
          <motion.article className="project-card glass" key={p.name} variants={fadeUp()} whileHover={{ y: -8 }}>
            <div className="project-glow" />
            <div className="project-head">
              <div className="project-emoji">🛡️</div>
              <div className="project-links">
                <a href="#" aria-label="Live demo"><FiExternalLink /></a>
                <a href="#" aria-label="Source code"><FiGithub /></a>
              </div>
            </div>
            <h3 className="project-title">{p.name}</h3>
            <span className="project-period"><FiCalendar /> {p.period}</span>
            <ul className="project-points">
              {p.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            <div className="project-stack">
              {p.stack.map((s) => (
                <span className="chip sm" key={s}>{s}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
