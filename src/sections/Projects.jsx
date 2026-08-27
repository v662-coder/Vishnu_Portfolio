import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { projects, projectCategories } from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'

function ProjectCard({ project }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -6, y: px * 8 })
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className="group relative rounded-xl3 p-[1px] transition-transform duration-300 will-change-transform"
    >
      <div className="absolute inset-0 rounded-xl3 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative glass-card rounded-xl3 overflow-hidden h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden bg-surface2">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/25 via-accent-blue/15 to-accent-cyan/15 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <span className="font-display text-sm text-white/50 tracking-widest uppercase">
              {project.title}
            </span>
          </div>
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {project.category.map((c) => (
              <span key={c} className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full glass text-white/80">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display text-lg font-semibold mb-2 flex items-center gap-2">
            {project.title}
            <ArrowUpRight size={16} className="text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-white/70 font-mono">
                {t}
              </span>
            ))}
          </div>

          <ul className="text-xs text-muted space-y-1 mb-5 list-disc list-inside">
            {project.features.slice(0, 2).map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <div className="flex gap-3 mt-auto pt-2 border-t border-border">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/80 hover:text-accent-cyan transition-colors"
            >
              <Github size={15} /> Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/80 hover:text-accent-cyan transition-colors"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.category.includes(filter))
  }, [filter])

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A mix of client work and personal builds across the MERN stack."
        />

        <div className="flex flex-wrap gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === cat
                  ? 'bg-gradient-brand text-white border-transparent shadow-glow'
                  : 'border-border text-muted hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
