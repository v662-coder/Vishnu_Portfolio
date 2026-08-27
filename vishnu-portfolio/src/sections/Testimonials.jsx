import { Quote } from 'lucide-react'
import { testimonials } from '../data/portfolioData'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Testimonials() {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say"
          description="Swap these placeholders for real client feedback."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.1}>
              <div className="glass-card p-6 h-full flex flex-col">
                <Quote size={22} className="text-accent-purple mb-4" />
                <p className="text-sm text-white/80 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center font-display font-semibold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
