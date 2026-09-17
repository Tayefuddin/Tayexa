import { Compass, Leaf, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Section from '../components/layout/Section'

interface Pillar {
  icon: LucideIcon
  title: string
  description: string
}

const PILLARS: Pillar[] = [
  {
    icon: Compass,
    title: 'Engineered Precision',
    description: 'Modern modeling and rigorous quality assurance at every phase.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Execution',
    description:
      'Clear milestones, proactive reporting, and strict adherence to timelines and budgets.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Building',
    description: 'Green building principles, durable materials, and energy-efficient designs.',
  },
]

function About() {
  return (
    <Section id="about" eyebrow="Who We Are" title="Built on Integrity. Driven by Innovation." className="bg-surface">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
          <p>
            At Tayexa Holdings, we believe modern construction is more than structural
            engineering—it is the foundation of how communities live, work, and grow. For over
            15 years, our team of licensed structural engineers, architects, and project managers
            has combined technical precision with sustainable practices to turn complex
            blueprints into enduring real-world landmarks.
          </p>
          <p>
            Safety, compliance, and structural integrity are non-negotiable. Every build adheres
            strictly to local regulatory codes and international safety benchmarks, ensuring
            transparent oversight, efficient resource allocation, and zero compromise on
            materials.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {PILLARS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-xl border border-slate bg-navy/60 p-6 transition-colors duration-300 hover:border-cream"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-slate bg-surface text-cream transition-colors duration-300 group-hover:border-cream">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-cream">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default About
