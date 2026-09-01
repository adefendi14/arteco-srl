import QuoteForm from '../components/QuoteForm'
import SectionHeader from '../components/SectionHeader'
import { company, copy } from '../data'

export default function Contatti() {
  const content = copy.contact

  return (
    <section className="bg-sand/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeader kicker={content.kicker} title={content.title} lead={content.lead} />
          <div className="mt-8">
            <QuoteForm />
          </div>
        </div>

        <aside className="rounded-2xl bg-cream p-6 md:p-8">
          <address className="not-italic">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink/45">
              {content.address}
            </p>
            <p className="mt-2 text-2xl font-semibold text-ink">{company.address}</p>
            <p className="mt-1 text-ink/65">{company.city}</p>
            <p className="mt-4 text-sm">
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="text-terracotta transition-colors duration-300 hover:text-ink"
              >
                {company.phone}
              </a>
              <span className="mx-2 text-ink/25">·</span>
              <a
                href={`mailto:${company.email}`}
                className="text-terracotta transition-colors duration-300 hover:text-ink"
              >
                {company.email}
              </a>
            </p>
            <p className="mt-3 text-sm text-ink/60">
              Referente: <strong className="text-ink">{company.referent}</strong>
            </p>
          </address>

          <div className="mt-8 border-t border-ink/10 pt-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink/45">
              {content.hours}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink/75">
              <li className="flex flex-col gap-0.5 sm:flex-row sm:justify-between">
                <span className="font-medium text-ink">{content.weekdays}</span>
                <span>{content.hoursSlots}</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-ink/8">
            <iframe
              title={content.mapTitle}
              src="https://maps.google.com/maps?q=Via%20dell%27Industria%2000%2C%20Milano&z=14&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </div>
    </section>
  )
}
