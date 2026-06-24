import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="section-heading"
      variants={fadeUp()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  )
}
