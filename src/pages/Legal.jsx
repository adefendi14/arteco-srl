import { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { legalLinks } from '../data'
import { getLegalPage, legalUpdatedAt } from '../legal'

function Block({ block }) {
  if (block.type === 'notice') {
    return (
      <p className="rounded-2xl border border-gold/35 bg-sand/80 px-4 py-3 text-sm leading-relaxed text-ink/75">
        {block.text}
      </p>
    )
  }

  if (block.type === 'ul') {
    return (
      <ul className="list-disc space-y-2 pl-5 text-ink/75">
        {block.items.map((item) => (
          <li key={item} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    )
  }

  if (block.type === 'p' && block.parts) {
    return (
      <p className="leading-relaxed text-ink/75">
        {block.parts.map((part) =>
          part.to ? (
            <Link
              key={`${part.to}-${part.text}`}
              to={part.to}
              className="font-medium text-terracotta underline decoration-terracotta/30 underline-offset-2 transition-colors duration-300 hover:text-ink"
            >
              {part.text}
            </Link>
          ) : (
            <span key={part.text}>{part.text}</span>
          ),
        )}
      </p>
    )
  }

  return <p className="leading-relaxed text-ink/75">{block.text}</p>
}

export default function LegalPage({ doc }) {
  const page = getLegalPage(doc)

  useEffect(() => {
    if (!page) return undefined
    const previous = document.title
    document.title = `${page.title}, Arteco S.r.l.`
    return () => {
      document.title = previous
    }
  }, [page])

  if (!page) return <Navigate to="/" replace />

  const otherLinks = legalLinks.filter((link) => {
    if (doc === 'privacy') return link.href !== '/privacy'
    if (doc === 'cookie') return link.href !== '/cookie'
    return link.href !== '/note-legali'
  })

  return (
    <article className="bg-cream">
      <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <header>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">{page.kicker}</p>
          <div className="mt-3 h-px w-10 bg-gold/70" />
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink md:text-[2.75rem]">{page.title}</h1>
          <p className="mt-4 text-ink/65">{page.lead}</p>
          <p className="mt-3 text-xs text-ink/45">Aggiornato il {legalUpdatedAt}</p>
        </header>

        <div className="mt-12 space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold tracking-tight text-ink">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.blocks.map((block, index) => (
                  <Block key={`${section.heading}-${index}`} block={block} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <nav className="mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/10 pt-6 text-sm" aria-label="Altre pagine legali">
          {otherLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-medium text-terracotta transition-colors duration-300 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </article>
  )
}
