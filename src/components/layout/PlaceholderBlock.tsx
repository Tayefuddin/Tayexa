interface PlaceholderBlockProps {
  label: string
  className?: string
}

/** Wireframe stand-in for content that will be built out in a later pass. */
function PlaceholderBlock({ label, className = '' }: PlaceholderBlockProps) {
  return (
    <div
      className={`flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-slate bg-surface/50 px-6 text-center text-sm font-medium uppercase tracking-wide text-cream/40 ${className}`}
    >
      {label}
    </div>
  )
}

export default PlaceholderBlock
