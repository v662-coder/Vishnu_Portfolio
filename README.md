# Vishnu — Full Stack MERN Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vishnu-portfolio-topaz.vercel.app/)
[![Built with Vite](https://img.shields.io/badge/Built_with-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A premium, animated developer portfolio built with **React 19-style hooks (React 18 runtime), Vite, Tailwind CSS, Framer Motion, Lenis, and EmailJS**.

> **Live URL:** [https://vishnu-portfolio-topaz.vercel.app/](https://vishnu-portfolio-topaz.vercel.app/)

Dark glass theme · Aurora gradient background · Scroll-reveal animations · Config-driven content · Mobile responsive.

---

## ✨ Live Demo

🚀 Check out the live version here:  
**[https://vishnu-portfolio-topaz.vercel.app/](https://vishnu-portfolio-topaz.vercel.app/)**

---

## 🚀 Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 18 (Vite) |
| **Styling** | Tailwind CSS, CSS3 |
| **Animations** | Framer Motion, Lenis (Smooth Scroll) |
| **Icons** | Lucide React, React Icons (Fa, Si) |
| **Forms & Email** | EmailJS (Contact Form) |
| **Deployment** | Vercel |

---

## ✨ Features

- ✅ **Fully Responsive** – Looks perfect on mobile, tablet, and desktop.
- ✅ **Dark Glass-Morphism UI** – Modern frosted glass aesthetic with blur effects.
- ✅ **Aurora Gradient Background** – Dynamic animated gradient for a premium feel.
- ✅ **Smooth Scrolling** – Lenis-powered smooth scroll with inertia.
- ✅ **Scroll-Reveal Animations** – Elements fade and slide in as you scroll using Framer Motion.
- ✅ **Typing Effect** – Dynamic role rotation in the Hero section.
- ✅ **Orbiting Tech Icons** – Animated 3D-style orbit showcasing core skills.
- ✅ **Config-Driven Content** – Edit `src/data/portfolioData.js` to update all text, stats, projects, and social links without touching the JSX.
- ✅ **Contact Form** – Fully functional contact form powered by EmailJS.
- ✅ **Performance Optimized** – Lightweight, fast loading, and SEO-friendly.


---

## ⚙️ Configuration (Update Content Easily)

All the portfolio content is managed via a single configuration file.  
To update your personal info, projects, skills, and stats, simply edit:

📁 **`src/data/portfolioData.js`**

Inside this file, you'll find the following sections:

| Object | Description |
| :--- | :--- |
| `personalInfo` | Name, bio, roles, availability, resume link, social links |
| `stats` | Years of experience, projects shipped, etc. |
| `projects` | Array of project objects (title, tech stack, features, links) |
| `skillCategories` | Categorized skills with proficiency levels (Frontend, Backend, etc.) |

> 💡 *No need to touch any JSX files to update text — just change the data file!*

---

## 🔐 Environment Variables (EmailJS Setup)

To make the contact form work, you need to create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key