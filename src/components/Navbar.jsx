import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks, profile } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    const onSection = (e) => setActive(e.detail)
    window.addEventListener('scroll', onScroll)
    window.addEventListener('section-change', onSection)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('section-change', onSection)
    }
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="nav-inner">
        <button className="logo" onClick={() => go('home')}>
          <span className="logo-badge">SB</span>
          <span className="logo-text">{profile.name.split(' ')[0]}<span className="dot">.</span></span>
        </button>

        <nav className="nav-links">
          {navLinks.map((l) => (
            <button
              key={l.id}
              className={`nav-link ${active === l.id ? 'active' : ''}`}
              onClick={() => go(l.id)}
            >
              {l.label}
              {active === l.id && <motion.span layoutId="nav-underline" className="underline" />}
            </button>
          ))}
        </nav>

        <a className="nav-cta" href={`mailto:${profile.email}`}>Let's Talk</a>

        <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((l) => (
              <button key={l.id} className={`mobile-link ${active === l.id ? 'active' : ''}`} onClick={() => go(l.id)}>
                {l.label}
              </button>
            ))}
            <a className="mobile-link cta" href={`mailto:${profile.email}`}>Let's Talk</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
