import { Link } from 'react-router-dom'
import { company } from '../data'
import { asset } from '../lib/assets'

export default function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="group flex items-center">
      <img
        src={asset('logo-arteco.png')}
        alt={company.name}
        className="h-10 w-auto shrink-0 object-contain bg-transparent transition-opacity duration-300 group-hover:opacity-85 sm:h-11"
        width={1211}
        height={580}
      />
    </Link>
  )
}
