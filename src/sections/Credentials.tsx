import { Medal, Star, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Section from '../components/layout/Section'
import { useReveal } from '../hooks/useReveal'
import { useSpotlight } from '../hooks/useSpotlight'
import { mergeRefs } from '../lib/mergeRefs'

interface Award {
  icon: LucideIcon
  title: string
  body: string
  year: string
}

const AWARDS: Award[] = [
  {
    icon: Trophy,
    title: 'Best Residential Developer',
    body: 'Bangladesh Real Estate & Housing Awards',
    year: '2024',
  },
  {
    icon: Medal,
    title: 'Excellence in Structural Engineering',
    body: 'Institution of Engineers, Bangladesh (IEB)',
    year: '2023',
  },
  {
    icon: Star,
    title: 'Safety-First Contractor Recognition',
    body: 'REHAB Annual Industry Awards',
    year: '2022',
  },
]

interface Stat {
  value: string
  label: string
}

const STATS: Stat[] = [
  { value: '40+', label: 'Completed & Ongoing Developments' },
  { value: '120+', label: 'In-House Engineers & Specialists' },
  { value: '0', label: 'Lost-Time Safety Incidents' },
  { value: '12 Yrs', label: 'Average Repeat-Client Relationship' },
]

interface AwardCardProps extends Award {
  delay: number
}

function AwardCard({ icon: Icon, title, body, year, delay }: AwardCardProps) {
  const { ref: revealRef, isVisible } = useReveal<HTMLDivElement>()
  const { ref: spotlightRef, onMouseMove } = useSpotlight<HTMLDivElement>()

  return (
    <div
      ref={mergeRefs(revealRef, spotlightRef)}
      onMouseMove={onMouseMove}
      style={{ transitionDelay: `${delay}ms` }}
      className={`card-interactive card-spotlight reveal rounded-xl border border-slate bg-surface p-6 ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-slate bg-navy text-cream">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <p className="mt-4 font-heading text-lg font-bold text-cream">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-cream/40">{year}</p>
    </div>
  )
}

interface StatTileProps extends Stat {
  delay: number
}

function StatTile({ value, label, delay }: StatTileProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal rounded-xl border border-slate bg-surface/70 p-5 md:p-6 ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      <p className="font-heading text-3xl font-bold text-cream md:text-4xl">{value}</p>
      <p className="mt-2 text-xs font-medium leading-snug text-muted md:text-sm">{label}</p>
    </div>
  )
}

function Credentials() {
  return (
    <Section
      id="credentials"
      eyebrow="Track Record"
      title="Recognized for Engineering Excellence"
      description="Two decades of disciplined execution, verified by the awards, safety record, and long-term client relationships that define how we build."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {AWARDS.map((award, index) => (
          <AwardCard key={award.title} {...award} delay={index * 80} />
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {STATS.map((stat, index) => (
          <StatTile key={stat.label} {...stat} delay={index * 80} />
        ))}
      </div>
    </Section>
  )
}

export default Credentials
