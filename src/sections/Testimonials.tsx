import PlaceholderBlock from '../components/layout/PlaceholderBlock'
import Section from '../components/layout/Section'

function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Client Voices"
      title="What Our Partners Say"
      className="bg-surface/40"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <PlaceholderBlock label="Testimonial" />
        <PlaceholderBlock label="Testimonial" />
        <PlaceholderBlock label="Testimonial" />
      </div>
    </Section>
  )
}

export default Testimonials
