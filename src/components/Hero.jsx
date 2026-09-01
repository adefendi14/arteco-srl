import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { copy } from '../data'

export default function Hero() {
  const content = copy.hero
  const sectionRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = sectionRef.current?.offsetHeight ?? window.innerHeight
      setScrollProgress(Math.min(window.scrollY / heroHeight, 1))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const contentOpacity = 1 - scrollProgress * 0.85
  const imageScale = 1 + scrollProgress * 0.08

  return (
    <section ref={sectionRef} className="relative h-[calc(100svh-4.75rem)] min-h-[28rem] overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `scale(${imageScale})` }}
      >
        <div
          className="absolute inset-0 bg-sand"
          role={content.imageSrc ? undefined : 'img'}
          aria-label={content.imageSrc ? undefined : content.imageAlt}
        >
          {content.imageSrc ? (
            <img
              src={content.imageSrc}
              alt={content.imageAlt}
              className="h-full w-full object-cover"
            />
          ) : (
            <div
              className="absolute inset-0 opacity-80"
              style={{
                backgroundImage: `
                  linear-gradient(160deg, #1a1615 0%, #3d2a22 35%, #6b4a38 65%, #a64b2a 100%),
                  repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 18px,
                    rgba(253, 251, 247, 0.03) 18px,
                    rgba(253, 251, 247, 0.03) 19px
                  )
                `,
              }}
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/20" />
      </div>

      <div
        className="relative z-10 flex h-full flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24"
        style={{ opacity: contentOpacity }}
      >
        <div className="mx-auto w-full max-w-6xl">
          <p
            className={`inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cream/85 backdrop-blur-sm transition-all duration-1000 ease-out ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '120ms' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {content.kicker}
          </p>

          <h1
            className={`mt-6 max-w-4xl text-balance text-[2.15rem] font-semibold leading-[1.12] tracking-tight text-cream sm:text-5xl lg:text-[3.6rem] transition-all duration-1000 ease-out ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '260ms' }}
          >
            {content.title}
          </h1>

          <p
            className={`mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-cream/75 transition-all duration-1000 ease-out ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {content.lead}
          </p>

          <div
            className={`mt-8 flex flex-wrap gap-3 transition-all duration-1000 ease-out ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '540ms' }}
          >
            <Link
              to="/prodotti"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8d3e23]"
            >
              {content.ctaProducts}
            </Link>
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center rounded-full border border-cream/30 bg-cream/10 px-6 py-3 text-sm font-semibold text-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
            >
              {content.ctaQuote}
            </Link>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2 text-cream/50 transition-opacity duration-500"
        style={{ opacity: 1 - scrollProgress * 2 }}
        aria-hidden="true"
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em]">Scorri</span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/25 p-1.5">
          <span className="h-2 w-0.5 animate-bounce rounded-full bg-cream/60" />
        </span>
      </div>
    </section>
  )
}
