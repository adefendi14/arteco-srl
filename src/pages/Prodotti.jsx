import { useMemo, useState } from 'react'
import { ProductGrid } from '../components/ProductCard'
import SectionHeader from '../components/SectionHeader'
import { copy, productCategories, products } from '../data'

export default function Prodotti() {
  const content = copy.products
  const [active, setActive] = useState('tubi')

  const items = useMemo(
    () => products.filter((item) => item.category === active),
    [active],
  )

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          kicker={content.kicker}
          title={content.title}
          lead={content.lead}
          align="center"
        />

        <div
          className="mt-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label={content.categoriesLabel}
        >
          {productCategories.map((category) => {
            const isActive = category.id === active
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(category.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-terracotta text-cream shadow-[0_10px_24px_-12px_rgba(175,48,38,0.55)]'
                    : 'bg-sand text-ink/70 hover:bg-hazel hover:text-ink'
                }`}
              >
                {category.label}
              </button>
            )
          })}
        </div>

        <ProductGrid items={items} />
      </div>
    </section>
  )
}
