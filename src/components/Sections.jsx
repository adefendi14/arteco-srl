import { Link } from 'react-router-dom'
import {
  certifications,
  copy,
  partners,
  products,
  sectors,
  services,
  testimonials,
} from '../data'
import SectionHeader from './SectionHeader'
import { ProductGrid } from './ProductCard'

export function SectorsPreview() {
  const content = copy.sectors

  return (
    <section className="bg-sand/70">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader kicker={content.kicker} title={content.title} lead={content.lead} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <article
              key={sector.id}
              className="rounded-2xl border border-ink/8 bg-cream px-6 py-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-24px_rgba(26,22,21,0.35)]"
            >
              <h3 className="text-xl font-semibold text-ink">{sector.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{sector.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProductsPreview() {
  const content = copy.products
  const preview = products.slice(0, 4)

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          kicker={content.kicker}
          title={content.title}
          lead={content.lead}
          align="center"
        />
        <ProductGrid items={preview} />
        <div className="mt-10 text-center">
          <Link
            to="/prodotti"
            className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-terracotta"
          >
            {content.viewAll}
          </Link>
        </div>
      </div>
    </section>
  )
}

export function ServicesPreview() {
  const content = copy.services

  return (
    <section className="bg-sand/80">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          kicker={content.kicker}
          title={content.title}
          lead={content.lead}
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className={`rounded-2xl border px-7 py-8 ${
                service.featured
                  ? 'border-gold/40 bg-cream shadow-[0_18px_36px_-24px_rgba(200,138,54,0.25)]'
                  : 'border-ink/8 bg-cream'
              }`}
            >
              {service.featured && (
                <p className="mb-3 inline-flex rounded-full border border-gold/40 bg-sand px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink/70">
                  {content.featuredBadge}
                </p>
              )}
              <h3 className="text-2xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/70">{service.description}</p>
              <ul className="mt-5 space-y-1.5 text-sm text-ink/65">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gold" aria-hidden="true">
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/servizi"
            className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8d3e23]"
          >
            {content.viewAll}
          </Link>
        </div>
      </div>
    </section>
  )
}

export function PartnersSection() {
  const content = copy.partners

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          kicker={content.kicker}
          title={content.title}
          lead={content.lead}
          align="center"
        />
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex h-28 w-52 items-center justify-center rounded-2xl border border-ink/8 bg-sand"
            >
              <span className="text-center">
                <span className="block text-2xl font-semibold text-ink/80">{partner.initials}</span>
                <span className="mt-1 block text-sm text-ink/55">{partner.name}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CertificationsSection() {
  const content = copy.certifications

  return (
    <section className="bg-sand/70">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeader
          kicker={content.kicker}
          title={content.title}
          lead={content.lead}
          align="center"
        />
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {certifications.map((cert) => (
            <li
              key={cert}
              className="rounded-full border border-gold/40 bg-cream px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-ink/70"
            >
              {cert}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-ink/50">
          {content.disclaimer}
        </p>
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  const content = copy.testimonials

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader kicker={content.kicker} title={content.title} align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.id}
              className="flex flex-col rounded-2xl bg-sand px-7 py-8"
            >
              <p className="flex-1 text-xl font-medium leading-relaxed text-ink">
                “{item.quote}”
              </p>
              <footer className="mt-8 border-t border-ink/10 pt-4">
                <cite className="not-italic">
                  <span className="block text-sm font-semibold text-ink">{item.name}</span>
                  <span className="mt-0.5 block text-xs tracking-wide text-ink/50">
                    {item.company}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaBanner() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Pronti a richiedere un preventivo?
          </h2>
          <p className="mt-3 max-w-xl text-cream/65">
            Contattateci per quotazioni su componenti, kit piping e servizi di revisione PSV.
          </p>
        </div>
        <Link
          to="/contatti"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-terracotta px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8d3e23]"
        >
          Contattaci
        </Link>
      </div>
    </section>
  )
}
