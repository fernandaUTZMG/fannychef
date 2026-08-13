import { useEffect, useState } from 'react'
import { brand, navLinks } from '../data/content'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-cream/95 shadow-[0_1px_0_rgba(43,27,107,0.08)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-pad mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 lg:h-16">
        <a
          href="#inicio"
          className={`font-display text-[1.05rem] font-bold tracking-tight sm:text-xl ${
            solid ? 'text-navy' : 'text-cream'
          }`}
          onClick={() => setOpen(false)}
        >
          <span className={solid ? 'text-sky' : 'text-sky'}>the</span>{' '}
          <span className={solid ? 'text-violet' : 'text-[#c9a4f0]'}>fanny</span>{' '}
          <span className={solid ? 'text-coral' : 'text-[#f0a57a]'}>chef</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-display text-sm font-medium transition ${
                  solid ? 'text-navy/75 hover:text-navy' : 'text-cream/85 hover:text-cream'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className={`hidden rounded-full px-4 py-2 font-display text-sm font-semibold transition sm:inline-flex ${
              solid
                ? 'bg-navy text-cream hover:bg-violet'
                : 'bg-cream text-navy hover:bg-white'
            }`}
          >
            Agenda tu valoración
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${
              solid
                ? 'border-navy/15 text-navy'
                : 'border-cream/35 bg-ink/20 text-cream backdrop-blur-sm'
            }`}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menú</span>
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-5 origin-center transition ${
                  solid ? 'bg-navy' : 'bg-cream'
                } ${open ? 'translate-y-[7px] rotate-45' : ''}`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-5 transition ${
                  solid ? 'bg-navy' : 'bg-cream'
                } ${open ? 'opacity-0' : ''}`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-0.5 w-5 origin-center transition ${
                  solid ? 'bg-navy' : 'bg-cream'
                } ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="max-h-[calc(100svh-3.5rem)] overflow-y-auto border-t border-navy/10 bg-cream px-4 py-5 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-3 font-display text-lg font-medium text-navy active:bg-sky/30"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-navy px-4 py-3.5 font-display text-sm font-semibold text-cream"
                onClick={() => setOpen(false)}
              >
                Agenda tu valoración
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
