import { Download, Mail, MapPin, Phone } from 'lucide-react'
import { NAV_LINKS } from '../../lib/navigation'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="border-t border-slate/60 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-xl font-bold text-cream">Tayexa Holdings</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              A premier real estate development and construction firm delivering
              landmark residential and commercial properties built on integrity,
              craftsmanship, and long-term value.
            </p>
            <p className="mt-4 text-xs text-cream/40">
              Licensed &amp; Bonded General Contractor · License No. XXXXXXX
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream">
              Quick Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-cream/60 transition-colors hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#portfolio" className="text-sm text-cream/60 transition-colors hover:text-cream">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-cream/60 transition-colors hover:text-cream">
                  Client Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-cream"
                >
                  <Download size={16} />
                  Download Company Brochure (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-cream/60">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>123 Skyline Avenue, Suite 400, Metropolis, ST 00000</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-cream/60">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+10000000000" className="transition-colors hover:text-cream">
                  +1 (000) 000-0000
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-cream/60">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:info@tayexaholdings.com" className="transition-colors hover:text-cream">
                  info@tayexaholdings.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate/60 pt-8 text-xs text-cream/40 sm:flex-row">
          <p>&copy; {currentYear} Tayexa Holdings. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-cream">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-cream">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
