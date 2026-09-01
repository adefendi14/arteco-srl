import { Link } from 'react-router-dom'
import { getProductImage, productCopy } from '../data'
import Placeholder from './Placeholder'

export default function ProductCard({ product }) {
  const copy = productCopy[product.id]

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-sand transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-28px_rgba(26,22,21,0.4)]">
      <Placeholder
        label={copy.placeholder}
        src={getProductImage(product)}
        alt={copy.name}
        ratio="5 / 4"
        rounded="rounded-none"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold leading-snug text-ink">{copy.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
          {copy.description}
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-2 text-xs text-ink/55">
          <div>
            <dt className="font-semibold uppercase tracking-[0.12em]">Materiale</dt>
            <dd className="mt-0.5 text-ink/75">{product.material}</dd>
          </div>
          <div>
            <dt className="font-semibold uppercase tracking-[0.12em]">Normativa</dt>
            <dd className="mt-0.5 text-ink/75">{product.norm}</dd>
          </div>
        </dl>
        {product.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-gold/40 bg-cream px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink/60"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        <Link
          to="/contatti"
          className="mt-5 inline-flex text-sm font-semibold text-terracotta transition-colors duration-300 hover:text-ink"
        >
          Richiedi preventivo →
        </Link>
      </div>
    </article>
  )
}

export function ProductGrid({ items }) {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
