import PlaceholderBlock from '../components/layout/PlaceholderBlock'
import Section from '../components/layout/Section'

function Portfolio() {
  return (
    <Section
      id="portfolio"
      eyebrow="Our Work"
      title="Featured Portfolio"
      description="Grid of flagship residential and commercial developments goes here."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PlaceholderBlock label="Project" className="min-h-56" />
        <PlaceholderBlock label="Project" className="min-h-56" />
        <PlaceholderBlock label="Project" className="min-h-56" />
      </div>
    </Section>
  )
}

export default Portfolio
