import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, CheckCircle2, Loader2, Send } from 'lucide-react'
import { personalInfo, socialLinks, emailjsConfig } from '../data/portfolioData'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const contactCards = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Github, label: 'GitHub', value: 'View profile', href: socialLinks.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect', href: socialLinks.linkedin },
  { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})

  const validate = (data) => {
    const next = {}
    if (!data.get('name')?.trim()) next.name = 'Name is required'
    if (!/^\S+@\S+\.\S+$/.test(data.get('email') || '')) next.email = 'Enter a valid email'
    if (!data.get('subject')?.trim()) next.subject = 'Subject is required'
    if (!data.get('message')?.trim()) next.message = 'Message is required'
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(formRef.current)
    const validation = validate(data)
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    setStatus('sending')
    try {
      if (emailjsConfig.serviceId.startsWith('YOUR_')) {
        // EmailJS not configured yet — simulate success so the UI can be previewed.
        await new Promise((r) => setTimeout(r, 900))
      } else {
        await emailjs.sendForm(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          formRef.current,
          emailjsConfig.publicKey
        )
      }
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a project in mind or just want to say hi? My inbox is open."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-muted mb-2 block">Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-border rounded-xl2 px-4 py-3 text-sm focus:border-accent-cyan outline-none transition-colors"
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-xs text-muted mb-2 block">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-border rounded-xl2 px-4 py-3 text-sm focus:border-accent-cyan outline-none transition-colors"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="text-xs text-muted mb-2 block">Subject</label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Project inquiry"
                  className="w-full bg-white/5 border border-border rounded-xl2 px-4 py-3 text-sm focus:border-accent-cyan outline-none transition-colors"
                />
                {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="text-xs text-muted mb-2 block">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-border rounded-xl2 px-4 py-3 text-sm focus:border-accent-cyan outline-none transition-colors resize-none"
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto">
                <AnimatePresence mode="wait" initial={false}>
                  {status === 'sending' ? (
                    <motion.span key="sending" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </motion.span>
                  ) : status === 'success' ? (
                    <motion.span key="success" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <CheckCircle2 size={16} /> Message sent
                    </motion.span>
                  ) : (
                    <motion.span key="idle" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Send size={16} /> Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              {status === 'error' && (
                <p className="text-xs text-red-400">Something went wrong — please try again or email me directly.</p>
              )}
            </form>
          </Reveal>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactCards.map((card, i) => (
              <Reveal key={card.label} delay={i * 0.08}>
                <a
                  href={card.href || undefined}
                  target={card.href ? '_blank' : undefined}
                  rel={card.href ? 'noopener noreferrer' : undefined}
                  className={`glass-card p-5 flex items-center gap-4 h-full ${card.href ? 'hover:border-accent-cyan/40 transition-colors' : ''}`}
                >
                  <div className="p-2.5 rounded-xl2 bg-white/5">
                    <card.icon size={18} className="text-accent-cyan" />
                  </div>
                  <div>
                    <div className="text-xs text-muted">{card.label}</div>
                    <div className="text-sm font-medium">{card.value}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
