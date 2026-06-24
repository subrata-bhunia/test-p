// Reusable framer-motion animation variants

export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] },
  },
})

export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, delay } },
})

export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  },
})

export const staggerContainer = (stagger = 0.1, delay = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
})

export const slideIn = (dir = 'left', delay = 0) => ({
  hidden: { opacity: 0, x: dir === 'left' ? -60 : 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  },
})
