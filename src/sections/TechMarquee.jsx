import { techMarquee } from '../data/portfolioData'

export default function TechMarquee() {
  const items = [...techMarquee, ...techMarquee]

  return (
    <section className="py-14 relative overflow-hidden border-y border-border">
      <div className="flex w-max animate-marquee">
        {items.map((tech, i) => (
          <div key={i} className="flex items-center gap-3 px-8 shrink-0">
            <span className="font-display text-xl md:text-2xl font-medium text-white/25 hover:text-white/70 transition-colors whitespace-nowrap">
              {tech}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-purple/40" />
          </div>
        ))}
      </div>
    </section>
  )
}
