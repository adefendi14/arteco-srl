export default function Placeholder({
  label,
  src,
  alt,
  ratio = '4 / 3',
  className = '',
  rounded = 'rounded-2xl',
}) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden bg-sand ${rounded} ${className}`}
        style={{ aspectRatio: ratio }}
      >
        <img
          src={src}
          alt={alt || label}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden border border-ink/10 bg-sand ${rounded} ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(135deg, #f3e8e6 0%, #dfc9c5 48%, #f3e8e6 100%),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 14px,
              rgba(26, 22, 21, 0.03) 14px,
              rgba(26, 22, 21, 0.03) 15px
            )
          `,
        }}
      />
      <div className="absolute inset-6 rounded-xl border border-ink/8" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <svg
          viewBox="0 0 48 48"
          className="h-8 w-8 text-gold/80"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.4" />
          <path
            d="M24 14v6M24 28v6M14 24h6M28 24h6"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        <p className="max-w-[16rem] text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink/45">
          {label}
        </p>
      </div>
    </div>
  )
}
