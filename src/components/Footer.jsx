import { Link } from 'react-router-dom'
import { company, copy, navLinks } from '../data'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            {copy.footer.blurb}
          </p>
        </div>

        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
            {copy.footer.legal}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="transition-colors duration-300 hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="#privacy" className="transition-colors duration-300 hover:text-cream">
                {copy.footer.privacy}
              </a>
            </li>
            <li>
              <a href="#cookie" className="transition-colors duration-300 hover:text-cream">
                {copy.footer.cookie}
              </a>
            </li>
            <li>
              <a href="#note-legali" className="transition-colors duration-300 hover:text-cream">
                {copy.footer.legalNotice}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
            {copy.footer.contacts}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>
              <a
                href={`mailto:${company.email}`}
                className="transition-colors duration-300 hover:text-cream"
              >
                {company.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="transition-colors duration-300 hover:text-cream"
              >
                {company.phone}
              </a>
            </li>
            <li>
              {company.address}, {company.city}
            </li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-cream/45">
            {company.vat}
            <br />
            {copy.footer.placeholderNote}
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-center text-xs text-cream/40 md:px-8 md:text-left">
          © {new Date().getFullYear()} {company.name}. {copy.footer.rights}
        </p>
      </div>
    </footer>
  )
}
