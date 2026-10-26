export default function SectionHeader({ kicker, title, lead, align = 'left' }) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">
        {kicker}
      </p>
      <div className={`mt-3 h-px w-10 bg-gold/70 ${centered ? 'mx-auto' : ''}`} />
      <h2 className="mt-3 text-[1.75rem] font-semibold tracking-tight text-ink sm:mt-5 sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {lead && <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65 sm:mt-4 sm:text-base">{lead}</p>}
    </div>
  )
}
