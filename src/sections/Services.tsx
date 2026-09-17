import PlaceholderBlock from '../components/layout/PlaceholderBlock'
import Section from '../components/layout/Section'

function Services() {
  return (
    <Section
      id="services"
      eyebrow="What We Do"
      title="Development & Construction Services"
      description="Service tiles for development, construction management, and consulting go here."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PlaceholderBlock label="Service card" />
        <PlaceholderBlock label="Service card" />
        <PlaceholderBlock label="Service card" />
      </div>
    </Section>
  )
}

export default Services
