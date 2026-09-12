import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import SectionHeader from '../components/SectionHeader'
import { categoryImages, copy, productCategories } from '../data'

export default function Prodotti() {
  const content = copy.products

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          kicker={content.kicker}
          title="Prodotti per impianti industriali"
          lead={content.indexLead}
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
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-2xl font-semibold text-ink">{category.label}</h2>
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
