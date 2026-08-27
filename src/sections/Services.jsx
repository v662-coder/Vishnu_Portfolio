import { motion } from 'framer-motion'
import {
  Code2, Server, ShieldCheck, Radio, LayoutDashboard, Search,
  Rocket, ShoppingCart, Gauge, Braces,
} from 'lucide-react'
import { services } from '../data/portfolioData'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const icons = [Braces, Code2, Server, ShieldCheck, Radio, LayoutDashboard, Search, Rocket, ShoppingCart, Gauge]

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Services"
          title="How I can help"
          description="From a single API endpoint to a full production application."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="glass-card p-6 h-full group hover:border-accent-cyan/40 relative overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-accent-purple/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-3 rounded-xl2 bg-white/5 inline-flex mb-4">
                    <Icon size={20} className="text-accent-cyan" />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2">{service.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{service.desc}</p>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
