import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiArrowUpRight } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { profile } from '../data'
import { fadeUp, staggerContainer } from '../utils/motion'

export default function Contact() {
  const items = [
    { Icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { Icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
    { Icon: FaGithub, label: 'GitHub', value: 'subrata-bhunia', href: profile.github },
    { Icon: FaLinkedinIn, label: 'LinkedIn', value: 'contact-subrata', href: profile.linkedin },
  ]

  return (
    <section id="contact" className="section">
      <SectionHeading eyebrow="07 — Contact" title="Let's Build Something" subtitle="Have a project or role in mind? My inbox is always open." />

      <motion.div
        className="contact-wrap glass"
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="contact-cta" variants={fadeUp()}>
          <h3>Ready to start a conversation?</h3>
          <p>I'm currently open to React Native & full-stack opportunities.</p>
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Say Hello <FiArrowUpRight />
          </a>
        </motion.div>

        <div className="contact-list">
          {items.map((it) => (
            <motion.a
              className="contact-item"
              key={it.label}
              href={it.href}
              target={it.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              variants={fadeUp()}
              whileHover={{ x: 6 }}
            >
              <span className="contact-ic"><it.Icon /></span>
              <span className="contact-info">
                <span className="contact-label">{it.label}</span>
                <span className="contact-value">{it.value}</span>
              </span>
              <FiArrowUpRight className="contact-arrow" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
