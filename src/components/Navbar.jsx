import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../data'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.75rem] max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Logo onClick={close} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigazione principale">
          {navLinks.map((link) => {
            const active = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[0.82rem] font-medium tracking-wide transition-colors duration-300 ${
                  active ? 'text-terracotta' : 'text-ink/70 hover:text-terracotta'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contatti"
            className="hidden rounded-full bg-terracotta px-5 py-2.5 text-[0.78rem] font-semibold tracking-wide text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8d3e23] lg:inline-flex"
          >
            Preventivo
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/20 bg-cream text-ink transition-colors duration-300 hover:border-terracotta hover:text-terracotta lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Chiudi' : 'Menu'}</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-300 ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[1.5px] w-full bg-current transition-opacity duration-300 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-300 ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-ink/8 bg-cream lg:hidden"
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6" aria-label="Navigazione mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={close}
              className="rounded-xl px-3 py-3 text-2xl font-semibold text-ink transition-colors duration-300 hover:bg-sand hover:text-terracotta"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contatti"
            onClick={close}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:bg-[#8d3e23]"
          >
            Preventivo
          </Link>
        </nav>
      </div>
    </header>
  )
}
