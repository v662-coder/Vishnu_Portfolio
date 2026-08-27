import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles } from 'lucide-react'

// ----- OLD IMPORTS (React, Node, Git) -----
import { FaReact, FaNodeJs, FaGitAlt, FaPython } from 'react-icons/fa'

// ----- NEW IMPORTS (Saare naye icons ke liye) -----
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss,
  SiMysql,           // MySQL
  SiVuedotjs,        // Vue.js
  SiJavascript,      // JavaScript
  SiRedis,           // Redis (System Design)
  SiSocketdotio,     // Socket.IO
  SiCapacitor,       // Capacitor (Mobile)
} from 'react-icons/si'

import { personalInfo, stats } from '../data/portfolioData'
import useCountUp from '../hooks/useCountUp'
import { useInView } from 'react-intersection-observer'

function useTypingEffect(words, typingSpeed = 70, deletingSpeed = 40, pause = 1400) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!deleting && subIndex === words[index].length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }
    const t = setTimeout(() => {
      setSubIndex((s) => s + (deleting ? -1 : 1))
    }, deleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause])

  return words[index].substring(0, subIndex)
}

function StatCard({ stat, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 })
  const value = useCountUp(stat.value, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card px-4 py-3 md:px-5 md:py-4"
    >
      <div className="text-xl md:text-2xl font-display font-semibold gradient-text">
        {value}
        {stat.suffix}
      </div>
      <div className="text-xs text-muted mt-1">{stat.label}</div>
    </motion.div>
  )
}

// ----- ORBIT ICONS (Aapka updated array - perfect hai) -----
const orbitIcons = [
  // Core Frontend/Backend
  { Icon: FaReact, color: '#61DAFB' },
  { Icon: FaNodeJs, color: '#8CC84B' },
  { Icon: SiMongodb, color: '#47A248' },
  { Icon: SiExpress, color: '#E7E7E7' },
  { Icon: SiTailwindcss, color: '#38BDF8' },
  { Icon: FaGitAlt, color: '#F1502F' },
  { Icon: SiMysql, color: '#4479A1' },          // MySQL
  { Icon: FaPython, color: '#3776AB' },         // Python / AI (FaPython use kiya hai)
  { Icon: SiVuedotjs, color: '#4FC08D' },       // Vue.js
  { Icon: SiJavascript, color: '#F7DF1E' },     // JavaScript
  { Icon: SiRedis, color: '#DC382D' },          // Redis (System Design)
  { Icon: SiSocketdotio, color: '#010101' },    // Socket.IO
  { Icon: SiCapacitor, color: '#119EFF' },      // Capacitor (Mobile)
];

function OrbitingIcons() {
  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto">
      <div className="absolute inset-0 rounded-full border border-border" />
      <div className="absolute inset-8 rounded-full border border-border" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="glass-card w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center shadow-glow">
          <span className="font-display text-3xl md:text-4xl font-bold gradient-text">VC</span>
        </div>
      </div>
      {orbitIcons.map(({ Icon, color }, i) => {
        const angle = (i / orbitIcons.length) * 2 * Math.PI
        const radius = 48
        const x = 50 + radius * Math.cos(angle)
        const y = 50 + radius * Math.sin(angle)
        return (
          <motion.div
            key={i}
            className="absolute w-11 h-11 md:w-14 md:h-14 -translate-x-1/2 -translate-y-1/2 glass-card flex items-center justify-center animate-float"
            style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.5}s` }}
          >
            <Icon size={22} color={color} />
          </motion.div>
        )
      })}
    </div>
  )
}

export default function Hero() {
  const typed = useTypingEffect(personalInfo.roles)

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 section-padding">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 text-xs md:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            {personalInfo.availability}
            <Sparkles size={14} className="text-accent-cyan" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold tracking-tight leading-[1.05]"
          >
            Hi, I&apos;m <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 h-9 font-mono text-lg md:text-2xl text-white/80"
          >
            {typed}
            <span className="inline-block w-[2px] h-5 md:h-6 bg-accent-cyan ml-1 animate-blink align-middle" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-muted text-base md:text-lg max-w-lg leading-relaxed"
          >
            {personalInfo.shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a href={personalInfo.resumeLink} download className="btn-outline">
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-outline"
            >
              Hire Me
            </a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <OrbitingIcons />
        </motion.div>
      </div>
    </section>
  )
}