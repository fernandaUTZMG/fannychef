import { motion, useReducedMotion } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { FloatingStickers } from './FloatingStickers'
import { useLanguage } from '../i18n/LanguageContext'

export function Process() {
  const { t } = useLanguage()
  const steps = t.process.steps
  const reduceMotion = useReducedMotion()

  return (
    <section id="method" className="relative overflow-hidden bg-sky/35 py-16 sm:py-28">
      <FloatingStickers
        items={[
          {
            src: '/img/stickers/spatulas.png',
            className: 'right-1 top-8 w-16 sm:right-4 sm:top-10 sm:w-24 lg:right-6 lg:w-28',
            rotate: 8,
            delay: 0.15,
          },
          {
            src: '/img/stickers/be-creative.png',
            className: 'left-1 bottom-10 w-20 sm:left-4 sm:bottom-14 sm:w-28 lg:left-6 lg:w-32',
            rotate: -7,
            delay: 0.3,
          },
          {
            src: '/img/stickers/sparkles.png',
            className: 'left-[20%] top-16 hidden w-8 lg:block',
            rotate: 10,
            delay: 0.4,
            duration: 3.6,
          },
        ]}
      />

      <div className="section-pad section-max relative z-10">
        <FadeIn>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-navy/70">
            {t.process.eyebrow}
          </p>
          <h2 className="mt-3 max-w-4xl font-display text-[1.65rem] font-extrabold tracking-tight text-navy text-balance sm:text-4xl md:text-5xl">
            {t.process.title}
          </h2>
        </FadeIn>

        {/* Móvil: lista vertical clara, una por una al bajar */}
        <ol className="relative mt-8 space-y-3 sm:hidden">
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-5 top-4 w-px bg-gradient-to-b from-violet/50 via-magenta/40 to-coral/50"
          />
          {steps.map((item) => (
            <motion.li
              key={item.step}
              initial={reduceMotion ? false : { opacity: 0, y: 28, x: -12 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-3"
            >
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-cream shadow-md ring-4 ring-sky/35">
                {item.step}
              </span>
              <article className="min-w-0 flex-1 rounded-2xl border border-navy/10 bg-cream/85 px-4 py-3.5">
                <h3 className="font-display text-base font-bold text-navy">{item.title}</h3>
                <p className="mt-1 font-display text-sm leading-relaxed text-navy/70">{item.copy}</p>
              </article>
            </motion.li>
          ))}
        </ol>

        {/* Desktop / tablet */}
        <div className="mt-12 hidden gap-6 sm:grid md:grid-cols-5">
          {steps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.07}>
              <article className="h-full">
                <p className="font-display text-4xl font-bold text-violet/40">{item.step}</p>
                <h3 className="mt-3 font-display text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-2 font-display text-sm leading-relaxed text-navy/70">{item.copy}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
