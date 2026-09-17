import { Award, Building, FileCheck, ShieldCheck, User } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Section from '../components/layout/Section'
import { useReveal } from '../hooks/useReveal'
import { useSpotlight } from '../hooks/useSpotlight'
import { mergeRefs } from '../lib/mergeRefs'

interface Testimonial {
  quote: string
  role: string
  company: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'From the initial soil testing through final interior handoff, Tayexa Holdings maintained rigorous quality controls and complete budget transparency. Their engineering team solved site challenges without causing schedule delays.',
    role: 'Managing Director',
    company: 'Private Infrastructure Investment Group',
  },
  {
    quote:
      'Working with Tayexa Holdings on our commercial facility gave our board absolute confidence. The project was handed over on time, fully certified, and under our initial cost projection.',
    role: 'Head of Real Estate Development',
    company: 'Apex Corporate Properties',
  },
]

interface Accreditation {
  icon: LucideIcon
  title: string
  descriptor: string
}

const ACCREDITATIONS: Accreditation[] = [
  {
    icon: ShieldCheck,
    title: 'Certified REHAB Member',
    descriptor: 'Real Estate & Housing Association of Bangladesh',
  },
  {
    icon: Building,
    title: 'RAJUK Enlisted Developer & Contractor',
    descriptor: 'Capital Development Authority Compliance',
  },
  {
    icon: FileCheck,
    title: 'Licensed General Contractor',
    descriptor: 'Lic. No. GC-784920-X',
  },
  {
    icon: Award,
    title: 'ISO 9001:2015 & BNBC Compliant',
    descriptor: 'Quality & National Building Code Standards',
  },
]

interface TestimonialCardProps extends Testimonial {
  delay: number
}

function TestimonialCard({ quote, role, company, delay }: TestimonialCardProps) {
  const { ref: revealRef, isVisible } = useReveal<HTMLDivElement>()
  const { ref: spotlightRef, onMouseMove } = useSpotlight<HTMLDivElement>()

  return (
    <div
      ref={mergeRefs(revealRef, spotlightRef)}
      onMouseMove={onMouseMove}
      style={{ transitionDelay: `${delay}ms` }}
      className={`card-interactive card-spotlight reveal relative overflow-hidden rounded-lg border border-slate bg-surface p-8 ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 left-6 font-heading text-8xl leading-none text-slate/50 select-none"
      >
        &ldquo;
      </span>
      <p className="relative mt-8 text-base leading-relaxed text-muted md:text-lg">{quote}</p>
      <div className="mt-8 flex items-center gap-4 border-t border-slate/60 pt-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate bg-navy text-cream">
          <User size={20} strokeWidth={1.75} />
        </div>
        <div>
          <p className="font-heading text-base font-bold text-cream">{role}</p>
          <p className="text-sm text-muted">{company}</p>
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  const { ref: strapRef, isVisible: isStrapVisible } = useReveal<HTMLDivElement>()

  return (
    <Section
      id="testimonials"
      eyebrow="Proven Reputation"
      eyebrowClassName="text-slate"
      title="Trusted by Developers, Property Owners, and Corporate Partners"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={testimonial.role} {...testimonial} delay={index * 80} />
        ))}
      </div>

      <div className="mt-16 border-t border-slate/60 pt-16">
        <div
          ref={strapRef}
          className={`reveal rounded-2xl border border-slate/60 bg-surface/50 p-8 md:p-10 ${
            isStrapVisible ? 'reveal-visible' : ''
          }`}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ACCREDITATIONS.map(({ icon: Icon, title, descriptor }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate bg-navy text-cream">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-bold text-cream md:text-base">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted md:text-sm">{descriptor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Testimonials
