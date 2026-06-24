import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FiArrowUp } from 'react-icons/fi'
import { profile } from '../data'

export default function Footer() {
  const top = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo-badge">SB</span>
          <div>
            <strong>{profile.name}</strong>
            <span>{profile.title} · {profile.tagline}</span>
          </div>
        </div>
        <div className="footer-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><HiOutlineMail /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}. Crafted with React & Framer Motion.</span>
        <button className="to-top" onClick={top} aria-label="Back to top"><FiArrowUp /></button>
      </div>
    </footer>
  )
}
