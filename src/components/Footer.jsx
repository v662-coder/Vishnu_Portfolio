import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { personalInfo, socialLinks, navLinks } from '../data/portfolioData'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-border section-padding !py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div>
            <div className="font-display text-2xl font-semibold gradient-text mb-3">
              {personalInfo.name.toUpperCase()}
            </div>
            <p className="text-sm text-muted max-w-xs leading-relaxed">{personalInfo.shortBio}</p>
            <div className="flex gap-3 mt-5">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-2.5 glass-card hover:border-accent-cyan/40 transition-colors">
                <Github size={16} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 glass-card hover:border-accent-cyan/40 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-2.5 glass-card hover:border-accent-cyan/40 transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted mb-4">Quick Links</div>
              <ul className="space-y-2.5 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                      className="text-white/70 hover:text-accent-cyan transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border text-xs text-muted">
          <span>© {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.</span>
          <button onClick={scrollTop} className="flex items-center gap-2 hover:text-white transition-colors">
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
