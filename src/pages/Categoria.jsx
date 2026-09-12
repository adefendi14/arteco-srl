import { Link, Navigate, useParams } from 'react-router-dom'
import { ProductGrid } from '../components/ProductCard'
import SectionHeader from '../components/SectionHeader'
import Placeholder from '../components/Placeholder'
import { categoryImages, copy, getCategory, products } from '../data'

export default function Categoria() {
  const { categoryId } = useParams()
  const category = getCategory(categoryId)
  const content = copy.products

  if (!category) return <Navigate to="/prodotti" replace />

  const items = products.filter((item) => item.category === category.id)

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <nav className="text-sm text-ink/50" aria-label="Percorso">
            <Link to="/" className="transition-colors hover:text-terracotta">
              {content.breadcrumbHome}
            </Link>
            <span className="mx-2">/</span>
            <Link to="/prodotti" className="transition-colors hover:text-terracotta">
              {content.breadcrumbProducts}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink/70">{category.label}</span>
          </nav>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <SectionHeader kicker={content.kicker} title={category.label} lead={category.excerpt} />
            <Placeholder
              label={category.label}
              src={categoryImages[category.id]}
              alt={category.label}
              ratio="4 / 3"
              className="group"
            />
          </div>
        </div>
      </section>

      <section className="bg-sand/70">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">{content.subtypesTitle}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.subtypes.map((subtype) => (
              <article key={subtype.name} className="rounded-2xl border border-ink/8 bg-cream px-5 py-5">
                <h3 className="font-semibold text-ink">{subtype.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{subtype.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">{content.specsTitle}</h2>
          <dl className="mt-8 divide-y divide-ink/10 overflow-hidden rounded-2xl border border-ink/8 bg-sand/50">
            {category.specs.map((spec) => (
              <div key={spec.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[12rem_1fr] sm:gap-8">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">{spec.label}</dt>
                <dd className="text-sm text-ink/75">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-sand/70">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">{content.rangeTitle}</h2>
          <ProductGrid items={items} />
          <div className="mt-12">
            <Link
              to={`/contatti?prodotto=${encodeURIComponent(category.label)}#preventivo`}
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-bordeaux"
            >
              {content.askAvailability}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
