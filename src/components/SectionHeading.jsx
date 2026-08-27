import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-4 max-w-2xl mb-14 md:mb-20 ${alignClass}`}>
      <Reveal>
        <span className="eyebrow">
          <span className="w-6 h-px bg-gradient-brand" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="text-muted text-base md:text-lg leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  )
}
