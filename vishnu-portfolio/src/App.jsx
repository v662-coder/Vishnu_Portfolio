import { Routes, Route } from 'react-router-dom'
import useSmoothScroll from './hooks/useSmoothScroll'
import AmbientBackground from './components/AmbientBackground'
import CursorGlow from './components/CursorGlow'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Services from './sections/Services'
import WhyHireMe from './sections/WhyHireMe'
import TechMarquee from './sections/TechMarquee'
import Testimonials from './sections/Testimonials'
import GithubActivity from './sections/GithubActivity'
import Contact from './sections/Contact'
import FAQ from './sections/FAQ'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <TechMarquee />
      <Experience />
      <Services />
      <WhyHireMe />
      <Testimonials />
      <GithubActivity />
      <FAQ />
      <Contact />
    </>
  )
}

export default function App() {
  useSmoothScroll()

  return (
    <div className="relative">
      <AmbientBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}
