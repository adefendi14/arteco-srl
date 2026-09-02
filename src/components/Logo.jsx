import { Link } from 'react-router-dom'
import { company } from '../data'
import { asset } from '../lib/assets'

export default function Logo({ onClick, tone = 'dark' }) {
  const taglineClass =
    tone === 'light' ? 'text-cream/50' : 'text-ink/55'

  return (
    <Link to="/" onClick={onClick} className="group flex items-center gap-3">
      <img
        src={asset('logo-arteco.png')}
        alt={company.name}
        className="h-10 w-auto shrink-0 object-contain bg-transparent transition-opacity duration-300 group-hover:opacity-85 sm:h-11"
        width={1211}
        height={580}
      />
      <span className="hidden min-w-0 leading-tight min-[520px]:block">
        <span className={`block text-[0.62rem] font-medium uppercase tracking-[0.18em] ${taglineClass}`}>
          {company.tagline}
        </span>
      </span>
    </Link>
  )
}
