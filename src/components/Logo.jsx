import { Link } from 'react-router-dom'
import { company } from '../data'

export default function Logo({ onClick, variant = 'dark' }) {
  const light = variant === 'light'

  return (
    <Link to="/" onClick={onClick} className="group flex items-center gap-3">
      <svg
        viewBox="0 0 40 40"
        className="h-10 w-10 shrink-0"
        aria-hidden="true"
      >
        <rect
          x="0.5"
          y="0.5"
          width="39"
          height="39"
          rx="8"
          fill={light ? '#FDFBF7' : '#1A1615'}
          className="transition-colors duration-300 group-hover:fill-[#A64B2A]"
        />
        <circle
          cx="20"
          cy="20"
          r="9"
          fill="none"
          stroke={light ? '#A64B2A' : '#A64B2A'}
          strokeWidth="1.6"
          className="transition-colors duration-300 group-hover:stroke-[#FDFBF7]"
        />
        <path
          d="M20 11v18M11 20h18"
          stroke={light ? '#C88A36' : '#C88A36'}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle
          cx="20"
          cy="20"
          r="2.5"
          fill={light ? '#A64B2A' : '#A64B2A'}
          className="transition-colors duration-300 group-hover:fill-[#FDFBF7]"
        />
      </svg>
      <span className="min-w-0 leading-tight">
        <span
          className={`block text-[1.2rem] font-semibold tracking-tight sm:text-[1.35rem] ${light ? 'text-cream' : 'text-ink'}`}
        >
          {company.name}
        </span>
        <span
          className={`hidden text-[0.62rem] font-medium uppercase tracking-[0.18em] min-[420px]:block ${light ? 'text-cream/50' : 'text-ink/55'}`}
        >
          {company.tagline}
        </span>
      </span>
    </Link>
  )
}
