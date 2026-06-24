import { motion } from 'framer-motion'
import { FiCode, FiSmartphone, FiZap, FiUsers } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { profile } from '../data'
import { fadeUp, slideIn, staggerContainer } from '../utils/motion'

const highlights = [
  { Icon: FiSmartphone, title: 'Cross-Platform', text: 'Production iOS & Android apps from a single React Native codebase.' },
  { Icon: FiZap, title: 'Performance', text: '40% faster startup via Redux Toolkit refactors & profiling.' },
  { Icon: FiCode, title: 'Clean Architecture', text: '8+ reusable TypeScript component libraries with strict typing.' },
  { Icon: FiUsers, title: 'Collaboration', text: 'Agile/Scrum delivery with cross-functional design & backend teams.' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading eyebrow="01 — About" title="Who I Am" />
      <div className="about-grid">
        <motion.div
          className="about-text"
          variants={slideIn('left')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>{profile.summary}</p>
          <div className="about-tags">
            <span>📍 Kolkata, India</span>
            <span>💼 4+ Years</span>
            <span>🚀 Open to Work</span>
          </div>
        </motion.div>

        <motion.div
          className="about-cards"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map((h) => (
            <motion.div className="about-card glass" key={h.title} variants={fadeUp()} whileHover={{ y: -6 }}>
              <div className="about-icon"><h.Icon /></div>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
