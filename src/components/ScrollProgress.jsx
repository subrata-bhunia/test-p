import { useEffect, useState } from 'react'
import { navLinks } from '../data'

// Tracks which section is active to highlight nav
export default function ScrollProgress() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Expose active id globally via data attribute for Navbar
  useEffect(() => {
    document.body.dataset.active = active
    window.dispatchEvent(new CustomEvent('section-change', { detail: active }))
  }, [active])

  return null
}
