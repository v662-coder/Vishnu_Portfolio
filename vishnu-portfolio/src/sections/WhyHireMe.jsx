import { CheckCircle2 } from 'lucide-react'
import { whyHireMe } from '../data/portfolioData'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function WhyHireMe() {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Why Hire Me" title="What you get, every project" align="center" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyHireMe.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.06}>
              <div className="glass-card p-5 h-full hover:shadow-glow transition-shadow">
                <CheckCircle2 size={20} className="text-success mb-3" />
                <h3 className="font-semibold text-sm mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
