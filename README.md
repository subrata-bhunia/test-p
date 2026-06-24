# Subrata Bhunia — Portfolio

A modern, fully-animated personal portfolio for **Subrata Bhunia**, React Native Developer (iOS & Android, 4+ years). Built with **React + Vite + Framer Motion**.

## ✨ Features

- Animated aurora/blob background with grid overlay
- Sticky glass navbar with active-section tracking + smooth scroll
- Hero with typewriter role rotation, floating cards, and a phone code mock
- Scroll-triggered reveal animations throughout
- Sections: About, Skills (icon marquee + chips), Experience timeline, Projects, Certifications, Education, Contact
- Fully responsive with a mobile menu
- Top scroll-progress indicator

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (default http://localhost:5173).

## 🛠 Build

```bash
npm run build
npm run preview
```

## 🧱 Tech Stack

- React 18 + Vite 5
- Framer Motion (animations)
- react-icons
- Plain CSS (custom properties, glassmorphism)

## 📁 Structure

```
src/
  components/   # Navbar, Hero, About, Skills, Experience, Projects, Certifications, Education, Contact, Footer, Background
  utils/        # framer-motion variants
  styles/       # global stylesheet
  data.js       # all resume content (single source of truth)
  App.jsx
  main.jsx
```

Edit `src/data.js` to update any content.
