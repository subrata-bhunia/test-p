import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skillGroups, techStack } from '../data'
import { fadeUp, scaleIn, staggerContainer } from '../utils/motion'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading eyebrow="02 — Skills" title="Tech Stack & Expertise" subtitle="The tools and technologies I use to build delightful mobile experiences." />

      {/* Marquee of tech icons */}
      <div className="marquee">
        <div className="marquee-track">
          {[...techStack, ...techStack].map((t, i) => (
            <div className="marquee-item" key={i} title={t.name}>
              <t.Icon style={{ color: t.color }} />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="skills-grid"
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {skillGroups.map((group) => (
          <motion.div className="skill-card glass" key={group.category} variants={fadeUp()} whileHover={{ y: -5 }}>
            <h3 className="skill-cat">{group.category}</h3>
            <div className="skill-chips">
              {group.items.map((item) => (
                <motion.span className="chip" key={item} variants={scaleIn()}>{item}</motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
