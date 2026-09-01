export default function SectionHeader({ kicker, title, lead, align = 'left' }) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">
        {kicker}
      </p>
      <div className={`mt-3 h-px w-10 bg-gold/70 ${centered ? 'mx-auto' : ''}`} />
      <h2 className="mt-5 text-4xl font-semibold tracking-tight text-ink md:text-[2.75rem]">
        {title}
      </h2>
      {lead && <p className="mt-4 text-ink/65">{lead}</p>}
    </div>
  )
}
