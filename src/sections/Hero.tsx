interface Metric {
  value: string
  label: string
}

const METRICS: Metric[] = [
  { value: '15+', label: 'Years of Industry Excellence' },
  { value: '2.5M+', label: 'Sq. Ft. Delivered' },
  { value: '100%', label: 'Regulatory & Safety Compliance' },
  { value: '98%', label: 'On-Time Project Delivery' },
]

function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden border-b border-slate/60"
    >
      {/* Structural grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,var(--color-slate)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-slate)_1px,transparent_1px)] [background-size:56px_56px]"
      />
      {/* Soft gradient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-surface opacity-70 blur-3xl md:-top-48 md:h-[36rem] md:w-[36rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-navy"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-7xl flex-col justify-center px-6 py-20">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cream/60">
          Real Estate Development &amp; Construction
        </p>

        <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-cream sm:text-5xl md:text-6xl">
          Engineering Spaces That Stand the Test of Time.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          From concept to completion, Tayexa Holdings delivers premium residential
          developments and commercial infrastructure with precision, safety, and
          uncompromising quality.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="btn-shimmer inline-flex w-full items-center justify-center rounded-md bg-cream px-7 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-4px_rgba(252,241,208,0.4)] active:scale-95 sm:w-auto"
          >
            Request a Consultation
          </a>
          <a
            href="#portfolio"
            className="inline-flex w-full items-center justify-center rounded-md border border-slate px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-slate/30 active:scale-95 sm:w-auto"
          >
            Explore Our Portfolio
          </a>
        </div>

        {/* Credibility metrics bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-4 md:gap-6">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-slate bg-surface/70 p-5 backdrop-blur-sm md:p-6"
            >
              <p className="font-heading text-3xl font-bold text-cream md:text-4xl">
                {metric.value}
              </p>
              <p className="mt-2 text-xs font-medium leading-snug text-muted md:text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
