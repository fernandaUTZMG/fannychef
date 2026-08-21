import { FadeIn } from './FadeIn'
import { FloatingStickers } from './FloatingStickers'
import { useLanguage } from '../i18n/LanguageContext'

export function Membership() {
  const { t, whatsapp, lang } = useLanguage()

  return (
    <section id="membresia" className="relative overflow-hidden bg-[#f3ebe0] py-16 sm:py-28">
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-sky/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-violet/15 blur-3xl" />

      <FloatingStickers
        items={[
          {
            src: '/img/stickers/heart.png',
            className: 'right-1 top-6 w-9 sm:right-5 sm:top-10 sm:w-14 lg:right-8 lg:w-16',
            rotate: 8,
            delay: 0.15,
            duration: 4.5,
          },
          {
            src: '/img/stickers/shooting-star.png',
            className: 'left-1 top-20 w-9 sm:left-4 sm:top-24 sm:w-12 md:w-16 lg:left-4 lg:w-16',
            rotate: -6,
            delay: 0.3,
            duration: 5,
          },
          {
            src: '/img/stickers/sparkles.png',
            className: 'right-3 bottom-6 hidden w-9 lg:block',
            rotate: 14,
            delay: 0.4,
            duration: 3.7,
          },
        ]}
      />

      <div className="section-pad section-max relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
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

            <div className="mt-8 rounded-[1.5rem] bg-navy px-5 py-7 text-cream sm:rounded-[2rem] sm:px-8 sm:py-8">
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

          <FadeIn delay={0.1}>
            <div className="mx-auto w-full max-w-md lg:max-w-lg">
              <article
                className="membership-card relative aspect-[1.586/1] overflow-hidden rounded-[1.4rem] p-[3px] sm:rounded-[1.7rem]"
                aria-label={`${t.membership.cardBrand} — ${t.membership.cardTitle}`}
              >
                <div className="membership-card-inner relative flex h-full flex-col justify-between overflow-hidden rounded-[1.25rem] px-5 py-5 sm:rounded-[1.55rem] sm:px-7 sm:py-6">
                  <div
                    aria-hidden="true"
                    className="membership-card-shine pointer-events-none absolute inset-0"
                  />

                  {/* doodles */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 top-3 text-3xl text-violet/35 sm:text-4xl"
                  >
                    ♄
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-10 right-6 h-2 w-2 rounded-full bg-coral/50"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-16 right-12 h-1.5 w-1.5 rounded-full bg-gold/60"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-8 top-14 text-lg text-gold/50"
                  >
                    ✦
                  </span>

                  <div className="relative z-10 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-[0.7rem] uppercase tracking-[0.22em] text-navy/55">
                        {t.membership.cardWelcome}
                      </p>
                      <p className="mt-1 font-display text-sm font-extrabold tracking-[0.12em] text-navy sm:text-base">
                        {t.membership.cardBrand}
                        <span className="align-super text-[0.55em]">™</span>
                      </p>
                    </div>
                    <div
                      aria-hidden="true"
                      className="h-9 w-12 shrink-0 rounded-md bg-gradient-to-br from-gold via-[#f0d78a] to-[#c9a227] shadow-sm ring-1 ring-navy/10 sm:h-10 sm:w-14"
                    />
                  </div>

                  <div className="relative z-10 my-auto py-3">
                    <p className="font-script text-[2.15rem] leading-[0.95] text-violet sm:text-5xl">
                      {t.membership.cardTitle}
                    </p>
                    <p className="mt-2 font-display text-xs tracking-[0.14em] text-navy/55 sm:text-sm">
                      {t.membership.cardMeta}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-end justify-between gap-3 border-t border-navy/10 pt-3">
                    <p className="font-display text-[0.7rem] uppercase tracking-[0.12em] text-navy/55 sm:text-xs">
                      {t.membership.cardFooter}
                    </p>
                    <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coral">
                      MEMBER
                    </p>
                  </div>
                </div>
              </article>
              <p className="mt-3 text-center font-display text-xs tracking-[0.16em] text-navy/45 uppercase">
                {t.membership.cardSubtitle}
              </p>
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
