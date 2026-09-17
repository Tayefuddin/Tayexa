import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import Section from '../components/layout/Section'

const PROJECT_TYPES = [
  'Residential Development',
  'Commercial Infrastructure',
  'Design-Build / Turnkey',
  'Renovation & Retrofitting',
  'Joint Venture / Landowner',
]

const START_DATES = [
  'Immediate (Within 30 Days)',
  '3 – 6 Months',
  '6 – 12 Months',
  'Planning / Feasibility Phase',
]

type SubmitStatus = 'idle' | 'submitting' | 'success'

const inputClasses =
  'w-full rounded-md border border-slate bg-surface px-4 py-3 text-sm text-cream placeholder:text-muted focus:border-cream focus:outline-none focus:ring-2 focus:ring-cream/40 transition-colors duration-200'
const labelClasses = 'mb-2 block text-sm font-medium text-cream/80'

function Contact() {
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status !== 'idle') return
    setStatus('submitting')
    window.setTimeout(() => setStatus('success'), 1200)
  }

  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      eyebrowClassName="text-slate"
      title="Let’s Discuss Your Next Build"
      description="Whether you are developing a new multi-family project, commissioning a commercial building, or need turnkey project supervision, our team is ready to assist with feasibility, planning, and execution."
      className="bg-surface"
    >
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="rounded-lg border border-slate bg-navy p-8">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin size={20} strokeWidth={1.75} className="mt-0.5 shrink-0 text-cream" />
                <div>
                  <p className="text-sm font-semibold text-cream">Head Office</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    Gulshan Avenue, Gulshan-2, Dhaka 1212, Bangladesh
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone size={20} strokeWidth={1.75} className="mt-0.5 shrink-0 text-cream" />
                <div>
                  <p className="text-sm font-semibold text-cream">Direct Sales Desk</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    <a href="tel:+88028879400" className="transition-colors hover:text-cream">
                      +880 2-887-9400
                    </a>
                    {' / '}
                    <a href="tel:+8801700000000" className="transition-colors hover:text-cream">
                      +880 1700-000000
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail size={20} strokeWidth={1.75} className="mt-0.5 shrink-0 text-cream" />
                <div>
                  <p className="text-sm font-semibold text-cream">General Inquiries</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    <a href="mailto:contact@tayexa.com" className="transition-colors hover:text-cream">
                      contact@tayexa.com
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock size={20} strokeWidth={1.75} className="mt-0.5 shrink-0 text-cream" />
                <div>
                  <p className="text-sm font-semibold text-cream">Hours of Operation</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    Sunday – Thursday: 9:00 AM – 6:00 PM
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-lg border border-slate/60 bg-surface/60 p-5 text-sm leading-relaxed text-muted">
              All technical consultations include an initial site assessment and preliminary
              feasibility review.
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="rounded-lg border border-slate bg-navy p-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+880 1700-000000"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="projectType" className={labelClasses}>
                  Project Type
                </label>
                <select id="projectType" name="projectType" defaultValue="" className={inputClasses}>
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="location" className={labelClasses}>
                  Estimated Project Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="e.g., Gulshan, Banani, Purbachal"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="startDate" className={labelClasses}>
                  Target Start Date
                </label>
                <select id="startDate" name="startDate" defaultValue="" className={inputClasses}>
                  <option value="" disabled>
                    Select a timeframe
                  </option>
                  {START_DATES.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelClasses}>
                  Project Overview / Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project scope, timeline, and any specific requirements."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-cream px-7 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-4px_rgba(252,241,208,0.4)] disabled:pointer-events-none disabled:opacity-80 disabled:hover:translate-y-0 disabled:hover:shadow-none sm:col-span-2"
              >
                {status === 'idle' && (
                  <>
                    Send Project Inquiry
                    <Send size={16} />
                  </>
                )}
                {status === 'submitting' && (
                  <>
                    Sending
                    <Loader2 size={16} className="animate-spin" />
                  </>
                )}
                {status === 'success' && (
                  <>
                    Inquiry Sent — We’ll Be In Touch
                    <CheckCircle2 size={16} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  )
}

export default Contact
