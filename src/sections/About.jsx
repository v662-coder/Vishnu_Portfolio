import { Code2, FolderGit2, GraduationCap, Layers } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const infoCards = [
  { icon: Layers, label: 'Experience', value: personalInfo.experience },
  { icon: FolderGit2, label: 'Projects Shipped', value: '15+' },
  { icon: Code2, label: 'Core Stack', value: 'MERN' },
  { icon: GraduationCap, label: 'Problem Solving', value: 'DSA & System Design' },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into reliable software"
          description="A closer look at how I got here and what I care about when I build."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <Reveal className="lg:col-span-2">
            <div className="relative rounded-xl3 overflow-hidden glass-card p-2">
              <div className="aspect-[4/5] rounded-xl2 bg-gradient-to-br from-accent-purple/30 via-accent-blue/20 to-accent-cyan/20 flex items-center justify-center">
                <span className="font-display text-6xl font-bold gradient-text">VC</span>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-3 flex flex-col gap-8">
            <Reveal>
              <div className="space-y-4 text-muted leading-relaxed">
                {personalInfo.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {infoCards.map((card, i) => (
                <Reveal key={card.label} delay={i * 0.08}>
                  <div className="glass-card p-5 flex items-start gap-4 hover:border-accent-purple/40 transition-colors">
                    <div className="p-2.5 rounded-xl2 bg-white/5">
                      <card.icon size={20} className="text-accent-cyan" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{card.value}</div>
                      <div className="text-xs text-muted mt-0.5">{card.label}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="glass-card p-5 flex items-center gap-4">
                <GraduationCap size={22} className="text-accent-purple shrink-0" />
                <div className="text-sm">
                  <div className="text-white font-medium">{personalInfo.education.degree}</div>
                  <div className="text-muted">
                    {personalInfo.education.institute} · {personalInfo.education.year}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
