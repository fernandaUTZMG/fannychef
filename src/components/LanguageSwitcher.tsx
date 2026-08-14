import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/translations'

export function LanguageSwitcher({ solid = true }: { solid?: boolean }) {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const choose = (next: Lang) => {
    setLang(next)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Language"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex min-h-9 items-center gap-1 rounded-full border px-3 py-1.5 font-display text-sm font-semibold uppercase tracking-wide transition ${
          solid
            ? 'border-navy/15 bg-white/80 text-navy hover:border-violet'
            : 'border-cream/35 bg-ink/20 text-cream backdrop-blur-sm hover:bg-ink/35'
        }`}
      >
        {lang.toUpperCase()}
        <span aria-hidden="true" className="text-[10px]">
          {open ? '▴' : '▾'}
        </span>
      </button>

      {open && (
        <div
          className={`absolute right-0 top-[calc(100%+6px)] z-50 min-w-[4.5rem] overflow-hidden rounded-xl border shadow-lg ${
            solid
              ? 'border-navy/10 bg-cream text-navy'
              : 'border-cream/20 bg-ink text-cream'
          }`}
        >
          {(['es', 'en'] as Lang[]).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => choose(option)}
              className={`block w-full px-4 py-2.5 text-left font-display text-sm font-semibold uppercase tracking-wide transition ${
                lang === option
                  ? solid
                    ? 'bg-sky/30 text-navy'
                    : 'bg-cream/15 text-gold'
                  : solid
                    ? 'hover:bg-sky/20'
                    : 'hover:bg-cream/10'
              }`}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
