import { Clock, Download, Mail, MapPin, Phone } from 'lucide-react'

interface FooterLink {
  label: string
  href: string
}

const QUICK_LINKS: FooterLink[] = [
  { label: 'Company Profile', href: '#about' },
  { label: 'Leadership & Governance', href: '#' },
  { label: 'Safety & Compliance', href: '#credentials' },
  { label: 'Careers', href: '#' },
  { label: 'Media & Press', href: '#' },
]

const SECTOR_LINKS: FooterLink[] = [
  { label: 'Luxury Residential', href: '#portfolio' },
  { label: 'Commercial Towers', href: '#portfolio' },
  { label: 'Turnkey Design-Build', href: '#services' },
  { label: 'Structural Retrofitting', href: '#services' },
  { label: 'Completed Archives', href: '#portfolio' },
]

const LEGAL_LINKS: FooterLink[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Regulatory Disclaimers', href: '#' },
  { label: 'RAJUK & REHAB Disclosures', href: '#' },
]

function Footer() {
  return (
    <footer className="border-t border-slate bg-navy">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 rounded-lg border border-slate bg-surface p-8 lg:flex-row lg:items-center lg:gap-10">
          <div>
            <h3 className="font-heading text-xl font-bold text-cream md:text-2xl">
              Looking for our full technical credentials and past deliverables?
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              Download our comprehensive 2026 Corporate Profile and Project Catalog (PDF)
              detailing our engineering standards, safety certifications, and delivered square
              footage.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-md bg-cream px-6 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-4px_rgba(252,241,208,0.4)] lg:w-auto"
          >
            <Download size={18} />
            Download Corporate Profile (PDF)
          </a>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-xl font-bold text-cream">Tayexa Holdings</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A premier real estate development and construction firm committed to
              high-standard structural engineering, disciplined execution, and long-term asset
              value across residential and commercial sectors.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-muted/70">
              Trade License No: TRAD/DNCC/049281/2024 · Registered Developer &amp; Contractor.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream">
              Projects &amp; Sectors
            </h3>
            <ul className="mt-4 space-y-3">
              {SECTOR_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream">
              Direct Desk &amp; Hours
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Gulshan Avenue, Gulshan-2, Dhaka 1212</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+88028879400" className="transition-colors hover:text-cream">
                  +880 2-887-9400
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:contact@tayexa.com" className="transition-colors hover:text-cream">
                  contact@tayexa.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted">
                <Clock size={16} className="shrink-0" />
                <span>Sun &ndash; Thu: 9:00 AM &ndash; 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate pt-8 text-xs text-muted sm:flex-row">
          <p>&copy; 2026 Tayexa Holdings. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-cream">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
