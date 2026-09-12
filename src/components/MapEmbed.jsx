import { useState } from 'react'
import { copy } from '../data'

export default function MapEmbed({ src, title }) {
  const [loaded, setLoaded] = useState(false)
  const content = copy.contact

  if (!loaded) {
    return (
      <div className="flex min-h-64 flex-col items-start justify-center gap-4 bg-sand px-5 py-8">
        <p className="max-w-sm text-sm leading-relaxed text-ink/65">{content.mapPrivacy}</p>
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="inline-flex items-center justify-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-bordeaux"
        >
          {content.mapLoad}
        </button>
      </div>
    )
  }

  return (
    <iframe
      title={title}
      src={src}
      className="h-64 w-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
