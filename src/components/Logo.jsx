import { Link } from 'react-router-dom'
import { company } from '../data'
import { asset } from '../lib/assets'

export default function Logo({ onClick, tone = 'dark' }) {
  const taglineClass =
    tone === 'light' ? 'text-cream/50' : 'text-ink/55'

  return (
    <Link to="/" onClick={onClick} className="group flex flex-col items-start gap-0.5">
      <img
        src={asset('logo-arteco.png')}
        alt={company.name}
        className="h-10 w-auto shrink-0 object-contain bg-transparent transition-opacity duration-300 group-hover:opacity-85 sm:h-11"
        width={1211}
        height={580}
      />
      <span
        className={`text-[0.62rem] font-medium uppercase leading-none tracking-[0.18em] ${taglineClass}`}
      >
        {company.tagline}
      </span>
    </Link>
  )
}
