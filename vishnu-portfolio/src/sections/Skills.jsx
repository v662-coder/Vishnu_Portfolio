import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skillCategories } from '../data/portfolioData'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

function SkillBar({ skill, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-white/90">{skill.name}</span>
        <span className="text-muted font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-brand shadow-glow group-hover:shadow-glow-cyan"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].title)
  const activeCategory = skillCategories.find((c) => c.title === active)

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit behind every build"
          description="From interface to database — technologies I reach for daily."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActive(cat.title)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                active === cat.title
                  ? 'bg-gradient-brand text-white border-transparent shadow-glow'
                  : 'border-border text-muted hover:text-white hover:border-white/20'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <Reveal key={active}>
          <div className="glass-card p-6 md:p-10 grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {activeCategory.skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
