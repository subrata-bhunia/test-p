import { motion } from 'framer-motion'

// Animated aurora / blob background with floating particles
export default function Background() {
  const blobs = [
    { className: 'blob blob-1', x: [0, 60, -30, 0], y: [0, -40, 30, 0], dur: 18 },
    { className: 'blob blob-2', x: [0, -50, 40, 0], y: [0, 50, -20, 0], dur: 22 },
    { className: 'blob blob-3', x: [0, 40, -60, 0], y: [0, -30, 40, 0], dur: 26 },
  ]

  return (
    <div className="bg-wrap" aria-hidden="true">
      <div className="grid-overlay" />
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={b.className}
          animate={{ x: b.x, y: b.y }}
          transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <div className="noise" />
    </div>
  )
}
