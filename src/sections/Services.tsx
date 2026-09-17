import { ArrowRight, Briefcase, HardHat, Home, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Section from '../components/layout/Section'

interface Service {
  icon: LucideIcon
  title: string
  summary: string
  scope: string[]
  linkLabel: string
  linkHref: string
}

const SERVICES: Service[] = [
  {
    icon: Home,
    title: 'Residential Construction & Development',
    summary:
      'Turnkey solutions for luxury private residences, multi-family apartment complexes, and gated community housing.',
    scope: [
      'Architectural planning',
      'Structural development',
      'Interior fit-outs',
      'MEP (Mechanical, Electrical, Plumbing) integration',
    ],
    linkLabel: 'View Residential Projects',
    linkHref: '#portfolio',
  },
  {
    icon: Briefcase,
    title: 'Commercial & Corporate Infrastructure',
    summary:
      'Modern workspaces, retail centers, and multi-story commercial towers engineered for operational efficiency.',
    scope: [
      'Steel & reinforced concrete construction',
      'Shell & core',
      'Bespoke office interiors',
      'Fire safety systems',
    ],
    linkLabel: 'View Commercial Projects',
    linkHref: '#portfolio',
  },
  {
    icon: HardHat,
    title: 'Design-Build & Turnkey Management',
    summary: 'A single point of accountability from land acquisition assessment to handover.',
    scope: [
      'Feasibility analysis',
      'Municipal permitting',
      'Procurement',
      'Structural engineering',
      'End-to-end site supervision',
    ],
    linkLabel: 'Learn About Our Process',
    linkHref: '#about',
  },
  {
    icon: Wrench,
    title: 'Renovation & Structural Retrofitting',
    summary: 'Modernizing existing assets while reinforcing structural integrity.',
    scope: ['Seismic retrofitting', 'Spatial redesign', 'Facade upgrades', 'Building rehabilitation'],
    linkLabel: 'Discuss a Retrofit Project',
    linkHref: '#contact',
  },
]

function Services() {
  return (
    <Section id="services" eyebrow="What We Do" title="Comprehensive Construction & Development Services">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {SERVICES.map(({ icon: Icon, title, summary, scope, linkLabel, linkHref }) => (
          <div
            key={title}
            className="group rounded-lg border border-slate bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cream"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-slate bg-navy text-cream transition-colors duration-300 group-hover:border-cream">
              <Icon size={22} strokeWidth={1.75} />
            </div>

            <h3 className="mt-5 font-heading text-xl font-bold text-cream md:text-2xl">{title}</h3>

            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{summary}</p>

            <p className="mt-5 border-t border-slate/60 pt-5 text-xs font-semibold uppercase tracking-widest text-cream/40">
              Scope
            </p>
            <ul className="mt-3 space-y-1.5">
              {scope.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted md:text-sm">
                  <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={linkHref}
              className="group/cta mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cream transition-colors duration-300 hover:text-cream/80"
            >
              {linkLabel}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/cta:translate-x-1"
              />
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Services
