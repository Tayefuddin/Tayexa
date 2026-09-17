import PlaceholderBlock from '../components/layout/PlaceholderBlock'
import Section from '../components/layout/Section'

function Credentials() {
  return (
    <Section
      id="credentials"
      eyebrow="Why Tayexa"
      title="Licensing, Certifications & Track Record"
      description="Trust signals: licenses, certifications, awards, and key stats go here."
    >
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        <PlaceholderBlock label="Stat" className="min-h-28" />
        <PlaceholderBlock label="Stat" className="min-h-28" />
        <PlaceholderBlock label="Stat" className="min-h-28" />
        <PlaceholderBlock label="Stat" className="min-h-28" />
      </div>
    </Section>
  )
}

export default Credentials
