import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { navLinks, personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-4 md:mx-8 lg:mx-auto lg:max-w-6xl">
        <div
          className={`flex items-center justify-between rounded-full px-5 md:px-6 py-3 transition-all duration-300 ${
            scrolled ? 'glass' : 'bg-transparent border border-transparent'
          }`}
        >
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home') }} className="font-display font-semibold text-lg tracking-wide">
            {personalInfo.name.toUpperCase()}
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`relative px-4 py-2 text-sm rounded-full transition-colors ${
                  active === link.href ? 'text-white' : 'text-muted hover:text-white'
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={personalInfo.resumeLink} download className="btn-outline !py-2 !px-4 text-sm">
              <Download size={15} /> Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="btn-primary !py-2 !px-5 text-sm"
            >
              Hire Me
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-4 mt-2 glass-card overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="px-4 py-3 rounded-xl2 text-white/90 hover:bg-white/5 text-sm"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 mt-2 px-4">
                <a href={personalInfo.resumeLink} download className="btn-outline flex-1 !py-2 text-sm">
                  Resume
                </a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }} className="btn-primary flex-1 !py-2 text-sm">
                  Hire Me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
