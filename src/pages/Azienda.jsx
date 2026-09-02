import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import SectionHeader from '../components/SectionHeader'
import { companyStats, copy } from '../data'

export default function Azienda() {
  const content = copy.about

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <SectionHeader kicker={content.kicker} title={content.title} />
        </div>
      </section>

      <section className="bg-sand/70">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:px-8 md:py-20 lg:grid-cols-2 lg:gap-16">
          <Placeholder
            label={content.imageAlt}
            src={content.imageSrc}
            alt={content.imageAlt}
            ratio="4 / 3"
            className="group"
          />

          <div>
            <p className="text-[1.05rem] leading-relaxed text-ink/75">{content.p1}</p>
            <p className="mt-4 leading-relaxed text-ink/70">
              {content.p2Before}
              <strong className="font-semibold text-ink">{content.p2Strong}</strong>
              {content.p2After}
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">{content.p3}</p>

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
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <SectionHeader
            kicker="Target"
            title="A chi ci rivolgiamo"
            lead="Il sito è pensato per decision maker e tecnici che gestiscono approvvigionamenti e manutenzione impianti."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Aziende industriali',
              'Uffici acquisti',
              'Responsabili manutenzione',
              'Ingegneri e progettisti',
              'EPC contractor',
              'Distributori tecnici',
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-ink/8 bg-sand px-5 py-4 text-sm font-medium text-ink/75"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-bordeaux"
            >
              Parla con un referente
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
