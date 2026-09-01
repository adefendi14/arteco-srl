import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { copy, services } from '../data'

export default function Servizi() {
  const content = copy.services

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <SectionHeader
            kicker={content.kicker}
            title={content.title}
            lead={content.lead}
            align="center"
          />

          <div className="mt-12 space-y-6">
            {services.map((service) => (
              <article
                key={service.id}
                className={`rounded-2xl border px-7 py-8 md:px-10 md:py-10 ${
                  service.featured
                    ? 'border-gold/40 bg-sand/80'
                    : 'border-ink/8 bg-sand/50'
                }`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-2xl">
                    {service.featured && (
                      <p className="mb-3 inline-flex rounded-full border border-gold/40 bg-cream px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink/70">
                        {content.featuredBadge}
                      </p>
                    )}
                    <h2 className="text-3xl font-semibold tracking-tight text-ink">
                      {service.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-ink/70">{service.description}</p>
                  </div>
                  <Link
                    to="/contatti"
                    className="inline-flex shrink-0 items-center justify-center rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-gold hover:text-terracotta"
                  >
                    Richiedi info
                  </Link>
                </div>
                <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl bg-cream px-4 py-3 text-sm text-ink/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
