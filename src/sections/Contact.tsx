import PlaceholderBlock from '../components/layout/PlaceholderBlock'
import Section from '../components/layout/Section'

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title="Request a Consultation"
      description="Contact form and direct coordinates placeholder."
    >
      <PlaceholderBlock label="Contact form — wireframe placeholder" className="min-h-72" />
    </Section>
  )
}

export default Contact
