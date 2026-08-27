import { Briefcase, Code, User } from 'lucide-react'
import { experience } from '../data/portfolioData'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const iconMap = { work: Briefcase, freelance: Code, personal: User }

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've spent my time"
          align="center"
        />

        <div className="relative">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple via-accent-blue to-accent-cyan md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((item, i) => {
              const Icon = iconMap[item.type] || Briefcase
              const isEven = i % 2 === 0
              return (
                <Reveal key={item.role} delay={i * 0.1}>
                  <div className={`relative flex md:items-center gap-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                      <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center shadow-glow">
                        <Icon size={17} className="text-accent-cyan" />
                      </div>
                    </div>

                    <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                      <div className="glass-card p-6 hover:border-accent-purple/40 transition-colors">
                        <span className="text-xs font-mono text-accent-cyan">{item.period}</span>
                        <h3 className="font-display text-lg font-semibold mt-1">{item.role}</h3>
                        <p className="text-sm text-muted mb-3">{item.company}</p>
                        <ul className="text-sm text-white/70 space-y-1.5 list-disc list-inside">
                          {item.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
