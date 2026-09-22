import { Link } from 'react-router-dom'
import {
  audiences,
  categoryImages,
  certifications,
  company,
  companyStats,
  copy,
  partners,
  productCategories,
  sectors,
  services,
  strengths,
  testimonials,
} from '../data'
import Placeholder from './Placeholder'
import SectionHeader from './SectionHeader'

export function AboutPreview() {
  const content = copy.homeAbout
  const about = copy.about

  return (
    <section className="bg-sand/70">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-16">
        <Placeholder
          label={about.imageAlt}
          src={about.imageSrc}
          alt={about.imageAlt}
          ratio="4 / 3"
          className="group"
        />
        <div>
          <SectionHeader kicker={content.kicker} title={content.title} />
          <p className="mt-6 leading-relaxed text-ink/70">{about.p1}</p>
          <p className="mt-4 leading-relaxed text-ink/70">
            {about.p2Before}
            <strong className="font-semibold text-ink">{about.p2Strong}</strong>
            {about.p2After}
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-8">
            {companyStats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink/45">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>
          {about.statsNote ? <p className="mt-3 text-xs text-ink/45">{about.statsNote}</p> : null}
        </div>
      </div>
    </section>
  )
}

export function TargetPreview() {
  const content = copy.target

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader kicker={content.kicker} title={content.title} lead={content.lead} align="center" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => (
            <li key={item.id} className="rounded-2xl border border-ink/8 bg-sand px-5 py-5">
              <p className="font-semibold text-ink">{item.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function StrengthsSection() {
  const content = copy.strengths

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader kicker={content.kicker} title={content.title} align="center" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item) => (
            <article key={item.id} className="rounded-2xl border border-ink/8 bg-sand px-5 py-6">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectorsPreview() {
  const content = copy.sectors

  return (
    <section className="bg-sand/70">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader kicker={content.kicker} title={content.title} lead={content.lead} />
        <div className="mt-12 flex flex-wrap gap-3">
          {sectors.map((sector) => (
            <Link
              key={sector.id}
              to={`/settori#${sector.id}`}
              className="rounded-full border border-ink/8 bg-cream px-4 py-2 text-sm font-medium text-ink/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-terracotta"
            >
              {sector.name}
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/settori"
            className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-terracotta"
          >
            {content.viewAll}
          </Link>
        </div>
      </div>
    </section>
  )
}

export function ProductsPreview() {
  const content = copy.products

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          kicker={content.kicker}
          title={content.title}
          lead={content.lead}
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((category) => (
            <article
              key={category.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-sand transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-28px_rgba(26,22,21,0.4)]"
            >
              <Placeholder
                label={category.label}
                src={categoryImages[category.id]}
                alt={category.label}
                ratio="4 / 3"
                rounded="rounded-none"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-semibold text-ink">{category.label}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{category.excerpt}</p>
                {category.id === 'valvole' && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {category.subtypes.map((subtype) => (
                      <li
                        key={subtype.name}
                        className="rounded-full border border-gold/40 bg-cream px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink/60"
                      >
                        {subtype.name.split(' (')[0]}
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  to={category.href}
                  className="mt-5 inline-flex text-sm font-semibold text-terracotta transition-colors duration-300 hover:text-ink"
                >
                  {content.discover} →
                </Link>
              </div>
            </article>
          ))}
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
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className={`rounded-2xl border px-7 py-8 ${
                service.featured
                  ? 'border-gold/40 bg-cream shadow-[0_18px_36px_-24px_rgba(208,58,44,0.18)]'
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
              {service.highlights?.length > 0 ? (
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
              ) : null}
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/servizi"
            className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-bordeaux"
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
            <article key={item.id} className="rounded-2xl bg-sand px-7 py-8">
              <h3 className="text-xl font-semibold text-ink">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{item.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaBanner() {
  const content = copy.cta

  return (
    <section className="bg-bordeaux text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{content.title}</h2>
          <p className="mt-3 max-w-xl text-cream/65">{content.lead}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${company.email}`}
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-cream"
          >
            {content.mail}
          </a>
          <Link
            to="/contatti#preventivo"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-terracotta px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink"
          >
            {content.form}
          </Link>
        </div>
      </div>
    </section>
  )
}
