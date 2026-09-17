import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  eyebrow?: string
  title?: string
  description?: string
  className?: string
  containerClassName?: string
  children?: ReactNode
}

function Section({
  id,
  eyebrow,
  title,
  description,
  className = '',
  containerClassName = '',
  children,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-24 ${className}`}>
      <div className={`max-w-7xl mx-auto px-6 ${containerClassName}`}>
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream/60">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-heading text-3xl font-bold text-cream md:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base text-cream/70 md:text-lg">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
