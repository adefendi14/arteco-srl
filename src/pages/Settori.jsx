import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { copy, sectors } from '../data'

export default function Settori() {
  const content = copy.sectors

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader kicker={content.kicker} title="Settori di applicazione" lead={content.lead} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <article
              key={sector.id}
              id={sector.id}
              className="scroll-mt-28 rounded-2xl border border-ink/8 bg-sand px-6 py-6"
            >
              <h2 className="text-xl font-semibold text-ink">{sector.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{sector.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <Link
            to="/contatti#preventivo"
            className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-bordeaux"
          >
            {copy.cta.quote}
          </Link>
        </div>
      </div>
    </section>
  )
}
