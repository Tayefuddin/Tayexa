import PlaceholderBlock from '../components/layout/PlaceholderBlock'

function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-73px)] scroll-mt-20 items-center border-b border-slate/60"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cream/60">
          Real Estate Development &amp; Construction
        </p>
        <h1 className="max-w-3xl font-heading text-4xl font-bold text-cream md:text-6xl">
          Building Landmarks. Delivering Legacy.
        </h1>
        <PlaceholderBlock label="Hero copy, CTA buttons & visual — wireframe placeholder" className="mt-10" />
      </div>
    </section>
  )
}

export default Hero
