import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDownRight } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { profile, stats } from '../data'
import { fadeUp, staggerContainer } from '../utils/motion'

const roles = ['React Native Developer', 'Cross-Platform Engineer', 'TypeScript Specialist', 'GenAI Mobile Builder']

function useTypewriter(words, speed = 90, pause = 1600) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    let timeout
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setI((v) => v + 1)
    } else {
      timeout = setTimeout(() => {
        setText(word.substring(0, deleting ? text.length - 1 : text.length + 1))
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, i, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero-badge" variants={fadeUp()}>
          <span className="pulse" /> Available for new opportunities
        </motion.div>

        <motion.h1 className="hero-title" variants={fadeUp(0.05)}>
          Hi, I'm <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.div className="hero-role" variants={fadeUp(0.1)}>
          <span className="prompt">&gt;</span>
          <span className="typed">{typed}</span>
          <span className="caret" />
        </motion.div>

        <motion.p className="hero-sub" variants={fadeUp(0.15)}>
          {profile.tagline} — building production-grade mobile apps for iOS & Android with
          React Native, TypeScript, Redux Toolkit, and Generative AI.
        </motion.p>

        <motion.div className="hero-actions" variants={fadeUp(0.2)}>
          <a className="btn btn-primary" href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View My Work <FiArrowDownRight />
          </a>
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
            Contact Me <HiOutlineMail />
          </a>
        </motion.div>

        <motion.div className="hero-socials" variants={fadeUp(0.25)}>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><HiOutlineMail /></a>
        </motion.div>

        <motion.div className="hero-stats" variants={fadeUp(0.3)}>
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-value gradient-text">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="phone-mock">
          <div className="phone-notch" />
          <div className="phone-screen">
            <div className="code-window">
              <div className="code-dots"><span /><span /><span /></div>
              <pre>
{`const dev = {
  name: "Subrata",
  stack: [
    "React Native",
    "TypeScript",
    "Redux Toolkit"
  ],
  platforms: ["iOS","Android"],
  passion: "GenAI ✨"
};`}
              </pre>
            </div>
          </div>
        </div>
        <motion.div className="float-card fc-1" animate={{ y: [0, -14, 0] }} transition={{ duration: 4, repeat: Infinity }}>⚛️ React Native</motion.div>
        <motion.div className="float-card fc-2" animate={{ y: [0, 14, 0] }} transition={{ duration: 5, repeat: Infinity }}>🔷 TypeScript</motion.div>
        <motion.div className="float-card fc-3" animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>🤖 GenAI</motion.div>
      </motion.div>

      <motion.a
        className="scroll-hint"
        href="#about"
        onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="mouse"><span className="wheel" /></span>
        Scroll
      </motion.a>
    </section>
  )
}
