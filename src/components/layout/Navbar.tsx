import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { NAV_LINKS } from '../../lib/navigation'

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace('#', ''))

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  // Close the mobile drawer on viewport resize past the mobile breakpoint.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate/60 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'bg-navy/95 shadow-lg shadow-black/20' : 'bg-navy/80'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-heading text-xl font-bold tracking-tight text-cream md:text-2xl">
          Tayexa Holdings
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace('#', '')
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative pb-1 text-sm font-medium transition-colors ${
                    isActive ? 'text-cream' : 'text-cream/80 hover:text-cream'
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cream transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="#contact"
          className="btn-shimmer hidden rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-navy transition-all duration-300 hover:opacity-90 active:scale-95 md:inline-block"
        >
          Request a Consultation
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex items-center justify-center rounded-md p-2 text-cream md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate/60 bg-navy transition-[max-height] duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'max-h-96' : 'max-h-0 border-t-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-md px-2 py-3 text-base font-medium text-cream/80 transition-colors hover:bg-surface hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-full bg-cream px-5 py-3 text-center text-sm font-semibold text-navy"
            >
              Request a Consultation
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
