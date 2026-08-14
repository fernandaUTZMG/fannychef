import { motion, useReducedMotion } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { brand } from '../i18n/translations'
import { useLanguage } from '../i18n/LanguageContext'

export function About() {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()

  return (
    <section id="sobre-mi" className="relative overflow-hidden bg-navy py-16 text-cream sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-coral/20 blur-3xl" />

      <div className="section-pad section-max relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <FadeIn delay={0.05} className="order-1 lg:order-2">
            <div className="mx-auto max-w-md overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] lg:max-w-none">
              <img
                src="/img/ella.jpeg"
                alt={brand.founder}
                className="aspect-[4/5] w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </FadeIn>

          <FadeIn className="order-2 lg:order-1">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {t.about.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[1.85rem] font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
              {t.about.titleBefore}{' '}
              <span className="text-sky">the</span>{' '}
              <span className="text-violet">fanny</span>{' '}
              <span className="text-coral">chef</span>
              {t.about.titleAfter}
            </h2>
            <p className="mt-5 max-w-xl font-display text-base leading-relaxed text-cream/85 sm:mt-6 sm:text-lg">
              {t.about.p1}
            </p>
            <p className="mt-4 max-w-xl font-display text-base leading-relaxed text-cream/85 sm:text-lg">
              {t.about.p2}
            </p>
            <p className="mt-6 font-script text-2xl text-gold">
              — {brand.founder}
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 sm:mt-16">
          <FadeIn>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {t.about.pathEyebrow}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold tracking-tight sm:text-2xl">
              {t.about.pathTitle}
            </h3>
          </FadeIn>

          <div className="relative mt-8 max-w-3xl">
            <div
              aria-hidden="true"
              className="absolute bottom-3 left-3 top-3 w-px bg-gradient-to-b from-gold/80 via-violet/60 to-coral/70"
            />

            <ol className="space-y-4">
              {t.about.timeline.map((item) => (
                <motion.li
                  key={item.year}
                  initial={reduceMotion ? false : { opacity: 0, y: 36, x: -18 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, amount: 0.55 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex gap-4 pl-0"
                >
                  <motion.span
                    aria-hidden="true"
                    initial={reduceMotion ? false : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.55 }}
                    transition={{ duration: 0.35, delay: 0.12, type: 'spring', stiffness: 260 }}
                    className="relative z-10 mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_10px_rgba(227,178,60,0.65)] ring-[3px] ring-navy" />
                  </motion.span>

                  <div className="min-w-0 flex-1 rounded-xl border border-cream/10 bg-cream/[0.05] px-4 py-3 sm:flex sm:items-baseline sm:gap-4 sm:px-5">
                    <p className="shrink-0 font-display text-base font-bold text-gold sm:w-20 sm:text-lg">
                      {item.year}
                    </p>
                    <p className="mt-1 font-display text-sm leading-relaxed text-cream/80 sm:mt-0">
                      {item.text}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
