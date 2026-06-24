import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { certifications } from '../data'
import { fadeUp, staggerContainer } from '../utils/motion'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeading eyebrow="05 — Certifications" title="Credentials" subtitle="Continuous learning across mobile, full-stack, and AI." />

      <motion.div
        className="cert-grid"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {certifications.map((c) => (
          <motion.div className="cert-card glass" key={c.name} variants={fadeUp()} whileHover={{ y: -6 }}>
            <div className="cert-icon"><c.Icon /></div>
            <div className="cert-badge"><FiAward /> {c.issuer}</div>
            <h3 className="cert-name">{c.name}</h3>
            <div className="cert-skills">
              {c.skills.map((s) => (
                <span className="chip sm" key={s}>{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
