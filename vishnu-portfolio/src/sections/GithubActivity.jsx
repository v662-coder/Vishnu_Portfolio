import { Github, Linkedin, Star, GitFork, Code2 } from 'lucide-react'
import { socialLinks } from '../data/portfolioData'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const weeks = 30
const days = 7

function ContributionGraph() {
  // Deterministic placeholder pattern — replace with a real GitHub stats API/image.
  return (
    <div className="flex gap-1 overflow-x-auto pb-2">
      {Array.from({ length: weeks }).map((_, w) => (
        <div key={w} className="flex flex-col gap-1">
          {Array.from({ length: days }).map((_, d) => {
            const intensity = (w * 7 + d) % 5
            const opacity = [0.06, 0.2, 0.4, 0.65, 0.9][intensity]
            return (
              <div
                key={d}
                className="w-3 h-3 rounded-[3px]"
                style={{ backgroundColor: `rgba(139, 92, 246, ${opacity})` }}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

const repoStats = [
  { name: 'ecommerce-mern', stars: 24, forks: 8 },
  { name: 'realtime-chat-app', stars: 17, forks: 5 },
  { name: 'auth-system', stars: 12, forks: 4 },
]

export default function GithubActivity() {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="GitHub Activity" title="Building in the open" />

        <Reveal>
          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div className="flex items-center gap-2 text-sm text-muted">
                <Code2 size={16} className="text-accent-cyan" /> Contribution activity (placeholder)
              </div>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent-cyan hover:underline flex items-center gap-1.5"
              >
                <Github size={15} /> View GitHub profile
              </a>
            </div>
            <ContributionGraph />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {repoStats.map((repo, i) => (
            <Reveal key={repo.name} delay={i * 0.08}>
              <div className="glass-card p-5 hover:border-accent-purple/40 transition-colors">
                <div className="font-mono text-sm text-white/90 mb-3">{repo.name}</div>
                <div className="flex gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Star size={13} /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={13} /> {repo.forks}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <Github size={16} /> GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <Linkedin size={16} /> LinkedIn
          </a>
          {socialLinks.leetcode && (
            <a href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className="btn-outline">
              LeetCode
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
