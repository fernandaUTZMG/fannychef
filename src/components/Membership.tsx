import { FadeIn } from './FadeIn'
import { useLanguage } from '../i18n/LanguageContext'

export function Membership() {
  const { t, whatsapp, lang } = useLanguage()

  return (
    <section id="membresia" className="relative overflow-hidden bg-[#f3ebe0] py-16 sm:py-28">
      <div className="section-pad section-max">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
          <FadeIn>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-violet">
              {t.membership.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[1.85rem] font-bold tracking-tight text-navy text-balance sm:text-4xl md:text-5xl">
              {t.membership.title}{' '}
              <span className="font-script text-4xl font-normal text-gold sm:text-6xl">
                membership
              </span>
            </h2>
            <p className="mt-5 max-w-xl font-display text-base leading-relaxed text-navy/75 sm:text-lg">
              {t.membership.body}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-[1.5rem] bg-navy px-5 py-7 text-cream sm:rounded-[2rem] sm:px-8 sm:py-8">
              <p className="font-display text-sm uppercase tracking-[0.18em] text-gold">
                {t.membership.from}
              </p>
              <p className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
                $42,000{' '}
                <span className="block text-lg font-semibold text-cream/70 sm:inline sm:text-2xl">
                  MXN / {lang === 'en' ? 'month' : 'mes'}
                </span>
              </p>
              <p className="mt-2 font-display text-sm leading-relaxed text-cream/70">
                {t.membership.priceNote}
              </p>
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-cream px-5 py-3 font-display text-sm font-semibold text-navy transition hover:bg-white sm:w-auto"
              >
                {t.membership.join}
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2">
          {t.membership.includes.map((item, index) => (
            <FadeIn key={item} delay={index * 0.03}>
              <div className="flex items-start gap-3 rounded-2xl border border-navy/10 bg-cream/70 px-4 py-3">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet text-[11px] font-bold text-cream">
                  ✓
                </span>
                <p className="font-display text-sm text-navy/85 sm:text-base">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
