import { ArrowRight, Building2, CalendarClock, MapPin, Ruler } from 'lucide-react'
import { useMemo, useState } from 'react'
import PlaceholderBlock from '../components/layout/PlaceholderBlock'
import Section from '../components/layout/Section'

interface Project {
  id: string
  title: string
  category: string
  tags: string[]
  location: string
  scale: string
  status: 'Completed' | 'Ongoing'
  timeline: string
  overview: string
}

const PROJECTS: Project[] = [
  {
    id: 'apex-heights',
    title: 'The Apex Heights',
    category: 'Residential',
    tags: ['Residential', 'Completed'],
    location: 'Gulshan, Dhaka',
    scale: '180,000 Sq. Ft. | 18 Floors',
    status: 'Completed',
    timeline: '2024',
    overview:
      'A contemporary residential development engineered with high-strength concrete framing, sustainable rainwater harvesting, and smart security integrations.',
  },
  {
    id: 'vanguard-trade-center',
    title: 'Vanguard Trade Center',
    category: 'Commercial',
    tags: ['Commercial', 'Completed'],
    location: 'Banani C/A, Dhaka',
    scale: '320,000 Sq. Ft. | Dual Towers',
    status: 'Completed',
    timeline: '2025',
    overview:
      'Designed to meet rigorous structural and thermal efficiency standards, offering modern corporate floor plates and multi-tier basement parking.',
  },
  {
    id: 'horizon-enclave',
    title: 'Horizon Enclave',
    category: 'Residential / Mixed-Use',
    tags: ['Residential', 'Commercial', 'Ongoing'],
    location: 'Bashundhara R/A, Dhaka',
    scale: '95,000 Sq. Ft.',
    status: 'Ongoing',
    timeline: 'Target: Q4 2027',
    overview:
      'Currently in structural framing phase, featuring reinforced foundation engineering designed for long-term load distribution.',
  },
]

const FILTERS = ['All', 'Residential', 'Commercial', 'Ongoing', 'Completed'] as const
type Filter = (typeof FILTERS)[number]

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'All'
        ? PROJECTS
        : PROJECTS.filter((project) => project.tags.includes(activeFilter)),
    [activeFilter],
  )

  return (
    <Section
      id="portfolio"
      eyebrow="Our Work"
      title="Proven Results Across Sectors"
      className="bg-surface"
    >
      <div className="mb-12 flex flex-wrap gap-3">
        {FILTERS.map((filter) => {
          const isActive = filter === activeFilter
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
                isActive
                  ? 'border-cream bg-cream text-navy'
                  : 'border-slate bg-transparent text-cream/70 hover:border-cream/60 hover:text-cream'
              }`}
            >
              {filter}
            </button>
          )
        })}
      </div>

      {filteredProjects.length === 0 ? (
        <PlaceholderBlock label="No projects match this filter yet." />
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="animate-fade-in group flex flex-col overflow-hidden rounded-2xl border border-slate bg-navy"
            >
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-video">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface via-navy to-slate/40 transition-transform duration-500 group-hover:scale-105">
                  <Building2 size={48} strokeWidth={1} className="text-cream/10" />
                </div>
                <span className="absolute left-4 top-4 rounded-full border border-slate bg-navy/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-bold text-cream">{project.title}</h3>

                <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-wide text-muted">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="shrink-0" />
                    <dd>{project.location}</dd>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Ruler size={14} className="shrink-0" />
                    <dd>{project.scale}</dd>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CalendarClock size={14} className="shrink-0" />
                    <dd>
                      {project.status} &middot; {project.timeline}
                    </dd>
                  </div>
                </dl>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.overview}</p>

                <button
                  type="button"
                  className="group/cta mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-cream transition-colors duration-300 hover:text-cream/80"
                >
                  View Case Study
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/cta:translate-x-1"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </Section>
  )
}

export default Portfolio
