// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update the entire website. Nothing else
// needs to change to update copy, links, projects or skills.
// ─────────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Vishnu",
  fullName: "Vishnu Chaurasiya",
  role: "Full Stack MERN Developer",
  roles: [
    "Full Stack Developer",
    "MERN Stack Engineer",
    "Backend Developer",
    "React Developer",
    "Node.js Developer",
  ],
  experience: "2+ Years",
  location: "Gorakhpur, Uttar Pradesh , India",
  email: "vishnuchaurasiya1101@gmail.com",
  phone: "+91 7991510913",
  availability: "Open to Work",
  resumeLink: "/Vishnu_resume_FullStack.pdf",
  // resumeLink: 'https://drive.google.com/file/d/1nXUUd0ZsktUyncf6eIGPMjqeKN8HLHP4/view?usp=sharing',
  shortBio:
    "I architect and build production-ready full-stack applications with a focus on speed, security, and SEO — integrating AI-driven features, real-time communication, and scalable system design to deliver intelligent, user-centric solutions.s.",
  bio: [
    "I'm a passionate Full Stack Developer with 2+ years of experience building scalable web applications using the MERN stack.",
    "I specialize in React.js, Node.js, Express.js, MongoDB, MySQL, REST APIs, JWT Authentication, RBAC, Socket.IO, SEO optimization, and responsive UI development.",
    "I enjoy building fast, secure, SEO-friendly, and user-focused applications. My goal is to build products that solve real business problems with clean architecture and excellent user experience.",
  ],
  education: {
    degree: "B.Tech / Information Technology",
    institute: "Rajkiya Engineering College Banda",
    year: "2019 – 2023",
  },
};

export const socialLinks = {
  github: "https://github.com/v662-coder",
  linkedin: "https://www.linkedin.com/in/vishnu-chaurasiya-1210-/",
  leetcode: "https://leetcode.com/u/vishnuchaurasiya1101/",
  twitter: "https://x.com/Vishnu_1210_",
};

export const stats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Delivered", value: 15, suffix: "+" },
  { label: "REST APIs Built", value: 30, suffix: "+" },
  { label: "Happy Clients", value: 10, suffix: "+" },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 96 },
      { name: "Next.js", level: 75 },
      { name: "Vue.js", level: 77 },          
      { name: "JavaScript (ES6+)", level: 94 },
      { name: "TypeScript", level: 70 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "Backend & Languages",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "Python", level: 70 },          
      { name: "Java", level: 65 },             
      { name: "REST APIs", level: 90 },
      { name: "JWT Auth", level: 95 },
      { name: "RBAC", level: 80 },
      { name: "Socket.IO", level: 78 },
      { name: "Playwright", level: 75 },      
    ],
  },
  {
    title: "Database & Caching",
    skills: [
      { name: "MongoDB", level: 92 },
      { name: "MySQL", level: 88 },
      { name: "Redis", level: 85 },           
    ],
  },
  {
    title: "Cloud, Mobile & Architecture",    
    skills: [
      { name: "AWS (EC2/S3/Amplify)", level: 70 }, 
      { name: "Capacitor", level: 70 },             
      { name: "System Design", level: 80 },        
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Vite", level: 85 },
      { name: "Figma", level: 65 },
    ],
  },
  {
    title: "SEO & Performance",
    skills: [
      { name: "Technical SEO", level: 78 },
      { name: "On-page SEO", level: 80 },
      { name: "Core Web Vitals", level: 75 },
      { name: "Responsive Design", level: 92 },
    ],
  },
];

export const projectCategories = [
  "All",
  "MERN",
  "React",
  "JavaScript",
  "Backend",
  "AI",
];

export const projects = [
  {
    id: "study-orbit",
    title: "Study Orbit",
    category: ["MERN"],
    image: "/projects/study-orbit.jpg",
    description:
      "An ed-tech platform where instructors create and manage courses while students enroll and access learning materials, with secure JWT + OTP authentication, Razorpay payments and Cloudinary media storage.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Razorpay",
      "Cloudinary",
    ],
    features: [
      "JWT + OTP authentication",
      "Razorpay payment integration",
      "Cloudinary media storage",
      "Optimized with lazy loading",
    ],
    github: "https://github.com/v662-coder/StudyOrbit",
    live: "https://study-orbit.vercel.app",
    caseStudy: "",
  },
  {
    id: "smartpost",
    title: "SmartPost",
    category: ["MERN"],
    image: "/projects/smartpost.jpg",
    description:
      "A role-based social and productivity platform where admins, teachers, students and institutions manage posts, tasks, products, assignments and polls, backed by a scalable analytics dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "Role-based access (admin/teacher/student)",
      "Public & private CRUD views",
      "Analytics & activity dashboard",
    ],
    github: "https://github.com/v662-coder/smartpost",
    live: "https://smartpost-iota.vercel.app",
    caseStudy: "",
  },
  {
    id: "blog-x",
    title: "Blog-X App",
    category: ["React"],
    image: "/projects/blog-x.jpg",
    description:
      "A text-blogging web app with user authentication and authorization powered by Firebase.",
    tech: ["React", "Firebase"],
    features: ["Firebase authentication", "Create & publish blog posts"],
    github: "https://github.com/v662-coder/Blog-X",
    live: "https://blog-x-u8gr.vercel.app/",
    caseStudy: "",
  },
  {
    id: "nediaz",
    title: "Nediaz",
    category: ["MERN"],
    image: "/projects/nediaz.jpg",
    description:
      "A real-time job marketplace connecting job seekers with recruiters, with job listings, direct messaging, notifications and social features like posts, likes and comments.",
    tech: [
      "React.js",
      "Vue.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Capacitor",
      "AWS (Amplify/S3)",
      "System Design",
    ],
    features: [
      "Real-time messaging & notifications",
      "Job listing marketplace",
      "Social feed (posts, likes, comments)",
    ],
    github: "",
    live: "https://nediaz.com",
    caseStudy: "",
  },
  {
    id: "schezy",
    title: "Schezy",
    category: ["Full Stack", "Dashboard"],
    image: "/projects/school-management.jpg", // Apni image ka path daalden
    description:
      "A comprehensive school management platform streamlining student enrollment, attendance tracking, grade management, fee collection, and staff coordination with role-based access.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "AWS (S3)",
      "System Design",
    ],
    features: [
      "Student and teacher profile management with attendance tracking and report generation",
      "Grade/Result management system with automated GPA calculation and transcript generation",
      "Fee management, invoice generation, and payment tracking modules",
      "Role-Based Access Control (RBAC) for Admin, Teachers, Students, and Parents",
    ],
    github: "",
    live: "https://schezy.com/",
    caseStudy: "",
  },

  {
    id: "ai-job-hunter",
    title: "AI Job Hunter",
    category: ["Full Stack", "AI"],
    image: "/projects/ai-job-hunter.jpg",
    description:
      "A full-stack AI-powered job search and application platform that uses Groq API for intelligent resume-to-job matching and Playwright for automated browser-based job discovery and applications.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Playwright",
      "Groq API",
    ],
    features: [
      "AI-driven resume-to-job matching using Groq API (match scores, missing skills identification, job summaries, and application tracking)",
      "Automated browser-based job discovery with Playwright (authenticated sessions, web scraping, duplicate prevention, validation, and rate limiting)",
      "Full-stack architecture with secure JWT authentication, RBAC, and optimized MongoDB aggregation pipelines",
    ],
    github: "https://github.com/v662-coder/AI-Job-Hunter",
    live: "https://ai-job-hunter.vercel.app/",
    caseStudy: "",
  },
  {
    id: "resume-builder",
    title: "Resume Builder",
    category: ["React", "JavaScript"],
    image: "/projects/resume-builder.jpg",
    description:
      "An auto-generating resume builder built with React that helps working professionals create their resumes quickly.",
    tech: ["React", "JavaScript"],
    features: [
      "Auto-generated resume layout",
      "Editable sections in real time",
    ],
    github: "https://github.com/v662-coder/Resume-Builder",
    live: "",
    caseStudy: "",
  },
  {
    id: "rec-placement-cell",
    title: "REC Placement Cell",
    category: ["MERN", "Backend"],
    image: "/projects/placement-cell.jpg",
    description:
      "A full-stack placement management system built for the REC Banda placement cell to maintain student records and schedule company interviews.",
    tech: ["MongoDB", "Express", "Node.js", "EJS"],
    features: [
      "Student record management",
      "Company interview scheduling",
      "Server-rendered EJS views",
    ],
    github: "https://github.com/v662-coder/Rec-placement-cell",
    live: "",
    caseStudy: "",
  },
  {
    id: "ai-notes-app",
    title: "AI Notes App",
    category: ["AI"],
    image: "/projects/ai-notes.jpg",
    description:
      "A full-stack notes management app with AI-powered semantic search and AI-generated summaries, built with a Laravel backend and React frontend.",
    tech: ["Laravel", "React", "AI Services"],
    features: [
      "AI-generated note summaries",
      "Semantic search across notes",
      "Laravel + React full-stack",
    ],
    github: "https://github.com/v662-coder/ai-notes-app",
    live: "",
    caseStudy: "",
  },
  {
    id: "holehe-osint",
    title: "Holehe OSINT",
    category: ["Backend"],
    image: "/projects/holehe-osint.jpg",
    description:
      "An OSINT tool that checks whether an email address is registered on other platforms, mapping an email to its associated accounts.",
    tech: ["Python"],
    features: [
      "Email-to-accounts lookup",
      "OSINT reconnaissance tooling",
      "GNU GPL v3.0 licensed",
    ],
    github: "https://github.com/v662-coder/Holehe-OSINT",
    live: "",
    caseStudy: "",
  },

  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    category: ["React"],
    image: "/projects/ecommerce.jpg",
    description:
      "A modern e-commerce storefront with animated UI, products manageable on the go via Sanity, and full cart and checkout functionality.",
    tech: ["React", "Sanity"],
    features: [
      "Sanity-powered product management",
      "Cart & checkout flow",
      "Animated UI",
    ],
    github: "https://github.com/v662-coder/Vishnu-s_Ecomm",
    live: "",
    caseStudy: "",
  },
  {
    id: "snake-game",
    title: "Snake Game 🐉",
    category: ["React"],
    image: "/projects/snake-game.jpg",
    description:
      "A classic Snake game built with React, HTML Canvas and TypeScript.",
    tech: ["React", "TypeScript", "HTML Canvas"],
    features: [
      "Canvas-based game rendering",
      "Keyboard controls",
      "Score tracking",
    ],
    github: "https://github.com/v662-coder/SnakeGame",
    live: "",
    caseStudy: "",
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    category: ["JavaScript"],
    image: "/projects/hotel-booking.jpg",
    description:
      "A front-end hotel booking site built with HTML, CSS and JavaScript for interactive features.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Room browsing UI", "Interactive booking flow"],
    github: "https://github.com/v662-coder/Hotel-Booking",
    live: "",
    caseStudy: "",
  },
  {
    id: "weather-app",
    title: "Weather App",
    category: ["JavaScript"],
    image: "/projects/weather-app.jpg",
    description:
      "Look up live weather for any city — temperature in Celsius, conditions, feels-like, humidity and location.",
    tech: ["JavaScript", "Weather API"],
    features: [
      "City-based weather search",
      "Temperature, humidity & feels-like data",
    ],
    github: "https://github.com/v662-coder/Weather-App",
    live: "",
    caseStudy: "",
  },
  {
    id: "quiz-game",
    title: "Quiz Game",
    category: ["JavaScript"],
    image: "/projects/quiz-game.jpg",
    description:
      "A multiple-choice quiz game for testing and building knowledge, for fun or educational use.",
    tech: ["JavaScript", "HTML", "CSS"],
    features: ["Multiple-choice question flow", "Score tracking"],
    github: "https://github.com/v662-coder/Quiz-Game",
    live: "",
    caseStudy: "",
  },

  {
    id: "2d-platformer",
    title: "2D Platformer Game",
    category: ["JavaScript"],
    image: "/projects/2d-platformer.jpg",
    description:
      "A 2D platformer where the character avoids obstacles and jumps between suspended platforms.",
    tech: ["JavaScript", "HTML Canvas"],
    features: ["Physics-based jumping", "Obstacle & platform collision"],
    github: "https://github.com/v662-coder/2D-plateformer-Game",
    live: "",
    caseStudy: "",
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Agami Technologies · Noida, Uttar Pradesh",
    period: "Jan 2024 — Mar 2026",
    type: "work",
    points: [
      "Developed and maintained production-ready full-stack applications with React.js, Node.js, Express.js, MongoDB, MySQL and REST APIs, supporting 2,000+ active users.",
      "Designed and delivered 25+ RESTful APIs for authentication, user management, messaging, notifications, CRUD and core business workflows.",
      "Implemented JWT-based authentication and Role-Based Access Control (RBAC) to secure resources and manage role-specific access.",
      "Built real-time chat and messaging with Socket.IO for 1,500+ users, achieving sub-200ms message latency.",
      "Optimized MongoDB queries, indexing and aggregation pipelines — improved data-fetching performance by 35% and cut average API response time by 40%.",
      "Shipped real-time notification workflows that increased user engagement by 25%.",
      "Built reusable, responsive React.js components — dashboards, forms, tables and CRUD interfaces — using Hooks, Context API and Axios.",
      "Extended the web application to mobile with Capacitor, contributing to a 40% increase in mobile adoption.",
      "Collaborated cross-functionally through the SDLC using Agile practices to ship features, fix defects and improve reliability.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self-employed",
    period: "2026 — Present",
    type: "freelance",
    points: [
      "Delivered MERN applications for clients, from requirements to deployment.",
      "Optimized existing sites for SEO and Core Web Vitals.",
      "Built real-time features using Socket.IO for chat and live notifications.",
    ],
  },
  {
    role: "Personal Projects & Open Source",
    company: "Independent",
    period: "Ongoing",
    type: "personal",
    points: [
      "Shipped 13+ personal and open-source projects spanning the MERN stack, real-time apps, AI-powered tools and OSINT tooling — including Study Orbit, SmartPost, Nediaz, AI Notes App and Holehe OSINT.",
      "Explored modern frontend tooling and shared learnings publicly on GitHub.",
    ],
  },
];
export const services = [
  {
    title: "MERN Development",
    desc: "End-to-end web apps built on MongoDB, Express, React and Node.js.",
  },
  {
    title: "React Frontend",
    desc: "Fast, accessible, component-driven UIs with clean state management.",
  },
  {
    title: "Backend APIs",
    desc: "Secure, well-documented REST APIs designed to scale.",
  },
  {
    title: "Authentication Systems",
    desc: "JWT auth, RBAC, and session security done right.",
  },
  {
    title: "Real-time Applications",
    desc: "Socket.IO powered chat, notifications and live dashboards.",
  },
  {
    title: "Admin Dashboards",
    desc: "Data-dense, role-aware admin panels that are pleasant to use.",
  },
  {
    title: "SEO Optimization",
    desc: "Technical and on-page SEO tuned for real search visibility.",
  },
  {
    title: "Landing Pages",
    desc: "Conversion-focused landing pages with premium motion design.",
  },
  {
    title: "E-commerce Development",
    desc: "Storefronts, checkout flows and admin tooling for online stores.",
  },
  {
    title: "Performance Optimization",
    desc: "Faster load times, smaller bundles, better Core Web Vitals.",
  },
];

export const whyHireMe = [
  {
    title: "Clean Code",
    desc: "Readable, maintainable, well-structured code — every time.",
  },
  {
    title: "Responsive UI",
    desc: "Pixel-perfect across mobile, tablet and desktop.",
  },
  {
    title: "Fast Performance",
    desc: "Optimized bundles and lazy-loaded assets.",
  },
  {
    title: "API Integration",
    desc: "Comfortable wiring up any third-party or internal API.",
  },
  {
    title: "SEO Friendly",
    desc: "Built with search visibility in mind from day one.",
  },
  {
    title: "Authentication",
    desc: "Secure JWT-based auth and role management.",
  },
  {
    title: "Scalable Architecture",
    desc: "Systems designed to grow with the product.",
  },
  {
    title: "Deployment Experience",
    desc: "Comfortable shipping to Vercel, Netlify and cloud servers.",
  },
];

export const techMarquee = [
  "React",
  "Node.js",
  "MongoDB",
  "GitHub",
  "Docker",
  "Tailwind CSS",
  "TypeScript",
  "Vercel",
  "Netlify",
  "MySQL",
  "Socket.IO",
  "JWT",
];

export const testimonials = [
  {
    name: "Client Name",
    role: "Founder, Startup Name",
    quote:
      "Placeholder testimonial — replace with a real client quote about working with Vishnu on their project.",
    avatar: "/testimonials/avatar-1.jpg",
  },
  {
    name: "Client Name",
    role: "Product Manager, Company",
    quote:
      "Placeholder testimonial — replace with a real quote about delivery speed and code quality.",
    avatar: "/testimonials/avatar-2.jpg",
  },
  {
    name: "Client Name",
    role: "CTO, Company",
    quote:
      "Placeholder testimonial — replace with a real quote about communication and reliability.",
    avatar: "/testimonials/avatar-3.jpg",
  },
];

export const faqs = [
  {
    q: "What is your typical project turnaround time?",
    a: "It depends on scope — a landing page can take a few days, a full MERN application typically takes 2–6 weeks. I always share a timeline before starting.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — I work remotely with clients worldwide and communicate over email, Slack or your preferred tool.",
  },
  {
    q: "Can you work with an existing codebase?",
    a: "Yes, I regularly pick up existing MERN codebases for bug fixes, new features, or performance work.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes — every project includes a support window after launch, and ongoing retainers are available.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

// Fill in your EmailJS credentials to enable the contact form.
export const emailjsConfig = {
   serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};
