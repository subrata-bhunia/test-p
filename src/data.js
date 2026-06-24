import {
  SiReact, SiTypescript, SiJavascript, SiPython, SiPostgresql, SiRedux,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiMysql,
  SiDocker, SiGit, SiAmazon, SiGooglecloud,
} from 'react-icons/si'
import { TbBrandReactNative, TbApi } from 'react-icons/tb'
import { FaRobot, FaMicrosoft } from 'react-icons/fa'

export const profile = {
  name: 'Subrata Bhunia',
  title: 'React Native Developer',
  tagline: 'iOS & Android · 4+ Years',
  phone: '+91-7318915280',
  email: 'contact.sbhunia@gmail.com',
  github: 'https://github.com/subrata-bhunia',
  linkedin: 'https://linkedin.com/in/contact-subrata',
  summary:
    'React Native Developer with 4+ years designing, optimizing, and deploying cross-platform mobile applications for iOS and Android using React Native, TypeScript, and JavaScript. Experienced in full-stack integration with RESTful APIs, Redux Toolkit state management, performance profiling, and code reviews — delivering production-grade features within Agile/Scrum sprint cycles. Expanding hands-on expertise in Generative AI integrations and UI/UX implementation to build innovative intelligent mobile experiences.',
}

export const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '8+', label: 'Reusable Libraries' },
  { value: '40%', label: 'Faster App Startup' },
  { value: '0', label: 'Critical Defects' },
]

export const skillGroups = [
  {
    category: 'Languages & Scripting',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL (PostgreSQL)', 'HTML/CSS', 'PowerShell'],
  },
  {
    category: 'Mobile Development',
    items: ['React Native (iOS & Android)', 'Cross-Platform Development', 'App Store / Google Play Deployment'],
  },
  {
    category: 'State Management',
    items: ['Redux Toolkit', 'Redux', 'Context API'],
  },
  {
    category: 'UI/UX Implementation',
    items: ['Responsive Layouts', 'Reusable Component Libraries', 'Pixel-Perfect UI', 'Accessibility'],
  },
  {
    category: 'Testing & Debugging',
    items: ['React Native Profiler', 'Performance Profiling', 'Automated Testing', 'Code Reviews', 'Debugging'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express', 'RESTful APIs', 'Axios', 'REST', 'Microservices'],
  },
  {
    category: 'Databases & Cloud',
    items: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL', 'Azure', 'GCP'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (Lambda, S3, EC2, API Gateway, RDS)', 'CI/CD Pipelines', 'Docker', 'Git'],
  },
  {
    category: 'AI & Automation',
    items: ['Generative AI (GenAI)', 'AI-Powered Automation', 'Power Automate', 'Power Apps'],
  },
]

export const techStack = [
  { name: 'React Native', Icon: TbBrandReactNative, color: '#61dafb' },
  { name: 'React', Icon: SiReact, color: '#61dafb' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178c6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
  { name: 'Redux', Icon: SiRedux, color: '#764abc' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5fa04e' },
  { name: 'Express', Icon: SiExpress, color: '#ffffff' },
  { name: 'Python', Icon: SiPython, color: '#3776ab' },
  { name: 'REST APIs', Icon: TbApi, color: '#06b6d4' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169e1' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479a1' },
  { name: 'Firebase', Icon: SiFirebase, color: '#ffca28' },
  { name: 'AWS', Icon: SiAmazon, color: '#ff9900' },
  { name: 'GCP', Icon: SiGooglecloud, color: '#4285f4' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ed' },
  { name: 'Git', Icon: SiGit, color: '#f05032' },
  { name: 'Generative AI', Icon: FaRobot, color: '#10b981' },
]

export const experience = [
  {
    role: 'Software Engineer Analyst — React Native Developer',
    company: 'Accenture',
    location: 'Kolkata, WB, IN',
    period: 'Nov. 2022 – Present',
    current: true,
    bullets: [
      'Reduced feature development cycle time by 35% by engineering 8+ reusable TypeScript React Native component libraries with strict prop typing that eliminated redundant code across iOS and Android screens.',
      'Improved app startup performance by 40% (React Native Profiler flame-graph analysis) by refactoring Redux Toolkit state architecture and eliminating unnecessary re-renders across 5 high-traffic screens.',
      'Accelerated REST API integration velocity by 30% by architecting a centralized Axios interceptor layer handling authentication, error normalization, and retry logic for 12+ API endpoints.',
      'Boosted AI-assisted feature adoption by 25% by implementing Generative AI-powered intelligent assistant workflows within the cross-platform mobile application.',
      'Achieved 0 critical production defects across 6 consecutive sprint releases by instituting structured code review practices and TypeScript strict-mode enforcement.',
      'Reduced cross-team integration rework by 20% by collaborating with design and backend teams to translate UI/UX specs into pixel-perfect React Native screens.',
    ],
    tech: ['React Native', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'REST APIs', 'Axios', 'Generative AI', 'Node.js', 'Git', 'Agile/Scrum'],
  },
  {
    role: 'Mobile Application Developer (Contract)',
    company: 'Webskitters',
    location: 'Kolkata, WB, IN',
    period: 'May 2022 – Oct. 2022',
    bullets: [
      'Boosted user engagement by 20% by delivering 5 React Native feature modules with optimized UI/UX flows and REST API integrations in collaboration with cross-functional teams.',
      'Reduced application crash rate by 30% and load time by 15% by applying systematic debugging and optimizing the data-fetching pipeline using Redux and Axios.',
    ],
    tech: ['React Native', 'Redux', 'REST APIs', 'Firebase'],
  },
  {
    role: 'Mobile Application Developer (Contract, Remote)',
    company: 'INA Internet Group',
    location: 'Kolkata, WB, IN',
    period: 'Jan. 2022 – May 2022',
    bullets: [
      'Cut release cycle time by 20% by integrating automated testing workflows that caught regressions pre-deployment, reducing QA back-and-forth by 3 hours per sprint.',
      'Achieved 100% on-time delivery rate across the 5-month engagement by leading end-to-end mobile feature development from requirements through deployment and post-go-live stabilization.',
    ],
    tech: ['React Native', 'Redux', 'REST APIs', 'Firebase', 'Agile'],
  },
  {
    role: 'Fullstack Developer (Remote)',
    company: 'Xanther Solutions',
    location: 'Hyderabad, TG, IN',
    period: 'Jan. 2021 – Dec. 2021',
    bullets: [
      'Reduced deployment time by 30% by automating test suites and streamlining AWS infrastructure releases (Lambda, S3, API Gateway, RDS) using DevOps pipelines.',
      'Improved mobile application reliability by 25% by building scalable RESTful microservices with Node.js and Python serving React Native and ReactJS frontends.',
    ],
    tech: ['React Native', 'ReactJS', 'Node.js', 'Python', 'AWS', 'CI/CD'],
  },
]

export const projects = [
  {
    name: 'Women Safety Application',
    period: 'Aug. 2021 – May 2022',
    stack: ['React Native', 'Node.js', 'MySQL', 'Google Maps API', 'Google OAuth 2.0'],
    points: [
      'Shipped a production cross-platform safety app for iOS and Android integrating real-time REST API orchestration via Google Maps API for live location tracking and automated SOS notification workflows.',
      'Built secure authentication using Google OAuth 2.0 and password hashing, protecting user data through a Node.js RESTful API backed by MySQL.',
      'Implemented hardware gesture automation (shake-to-alert) triggering instant multi-contact SOS notifications without user interaction.',
    ],
  },
]

export const certifications = [
  {
    name: 'React.Js + React Native',
    issuer: 'Coursera',
    Icon: SiReact,
    skills: ['React Native', 'React.js', 'Cross-Platform Development', 'Mobile App Development'],
  },
  {
    name: 'React.Js + Node.Js Full Stack Development',
    issuer: 'Coursera',
    Icon: SiNodedotjs,
    skills: ['React.js', 'Node.js', 'Express', 'Full Stack Development', 'RESTful APIs'],
  },
  {
    name: 'Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    Icon: FaMicrosoft,
    skills: ['Artificial Intelligence', 'Machine Learning', 'Azure AI Services', 'Generative AI'],
  },
]

export const education = {
  school: 'BP Poddar Institute of Management & Technology',
  degree: 'Bachelor of Technology in Information Technology',
  location: 'Kolkata, WB, IN',
  period: 'Aug. 2018 – June 2022',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]
