# Vishnu — Full Stack MERN Developer Portfolio

A premium, animated developer portfolio built with **React 19-style hooks (React 18 runtime), Vite, Tailwind CSS, Framer Motion, Lenis and EmailJS**.

Dark glass theme · aurora background · scroll-reveal animations · config-driven content.

![screenshot-placeholder](./public/og-image.png)

---

## 1. Run it locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

> Requires Node.js 18+ and npm. Check with `node -v`.

## 2. Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

---

## 3. Everything you'll want to edit lives in one file

```
src/data/portfolioData.js
```

This single file drives the **entire** site: name, bio, stats, skills, projects, experience, services, testimonials, FAQ, social links, resume link, email/phone, and EmailJS config. Change it once — every section updates automatically. You generally never need to touch the section components themselves.

### Add a new project
Open `src/data/portfolioData.js` and push a new object into the `projects` array, following the shape of the existing entries (`id`, `title`, `category`, `image`, `description`, `tech`, `features`, `github`, `live`).

### Replace images
- Drop real photos/screenshots into `public/projects/`, `public/testimonials/`, etc.
- Project cards currently render a gradient placeholder instead of an `<img>` tag so the site never ships broken image links. To use real screenshots, swap the placeholder `<div>` in `src/sections/Projects.jsx` for an `<img src={project.image} loading="lazy" />`.
- Add your own headshot the same way in `src/sections/About.jsx`.
- Replace `public/favicon.svg` and add an `public/og-image.png` (1200×630) for social share previews.

### Update your resume
Add your PDF at `public/resume.pdf` (the "Download Resume" buttons already point at `/resume.pdf` via `personalInfo.resumeLink`).

### Change colors
All brand colors are tokens in `tailwind.config.js` under `theme.extend.colors` and `backgroundImage.gradient-brand`. Change `accent.purple`, `accent.blue`, `accent.cyan`, `bg`, and `surface` there — every gradient, glow and button updates automatically.

### Connect EmailJS (contact form)
1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Create an Email Service and an Email Template with `name`, `email`, `subject`, `message` variables.
3. Copy your Service ID, Template ID and Public Key into `emailjsConfig` in `src/data/portfolioData.js`.
4. Until you do this, the form simulates a successful send so you can preview the UI — no emails are actually sent.

---

## 4. Deploy on Vercel

1. Push this project to a GitHub repository (see step 6 below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Click **Deploy**.

Or via CLI:
```bash
npm i -g vercel
vercel
```

## 5. Deploy on Netlify

1. Push this project to GitHub.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Click **Deploy site**.

Or drag-and-drop the `dist/` folder (after `npm run build`) into Netlify's manual deploy screen.

## 6. Push this project to GitHub

```bash
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Create the empty repository first at [github.com/new](https://github.com/new), then run the commands above from this project's root folder.

---

## Project structure

```
src/
  components/     Reusable UI (Navbar, Footer, Reveal, glow, progress bar...)
  sections/       One file per page section (Hero, About, Skills, Projects...)
  hooks/          useSmoothScroll, useCountUp
  data/           portfolioData.js — the single source of truth
  index.css       Tailwind layers + design tokens (glass, gradient-text, grid-bg...)
public/           Static assets — favicon, resume, images, robots.txt, sitemap.xml
```

## Notes

- **Performance:** sections lazy-reveal via `IntersectionObserver`, Vite code-splits vendor/motion bundles, images are expected to be served responsively once you add real assets.
- **Accessibility:** semantic sectioning, visible focus rings, and `prefers-reduced-motion` disables animation and Lenis smooth-scroll automatically.
- **SEO:** meta description, Open Graph + Twitter card tags, and `robots.txt`/`sitemap.xml` placeholders are already in `index.html` / `public/` — update the `your-domain.com` placeholders once you have a real domain.
