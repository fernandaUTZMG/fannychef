import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { FloatingStickers } from './FloatingStickers'
import { useLanguage } from '../i18n/LanguageContext'

export function Highlights() {
  const { t } = useLanguage()
  const services = t.services.items
  const benefits = t.services.benefits
  const scrollRef = useRef<HTMLDivElement>(null)

  const { scrollXProgress } = useScroll({ container: scrollRef })
  const barScale = useTransform(scrollXProgress, [0, 1], [0.12, 1])

  return (
    <section id="servicios" className="relative overflow-hidden bg-cream py-16 sm:py-28">
      <FloatingStickers
        items={[
          {
            src: '/img/stickers/chef-sticker.png',
            className: 'right-1 top-4 w-14 sm:right-4 sm:top-6 sm:w-28 lg:right-6 lg:w-32',
            rotate: 7,
            delay: 0.15,
          },
          {
            src: '/img/stickers/heart.png',
            className: 'left-1 bottom-6 w-8 sm:left-4 sm:bottom-10 sm:w-10 md:w-12 lg:left-4 lg:w-12',
            rotate: -10,
            delay: 0.3,
            duration: 4.5,
          },
          {
            src: '/img/stickers/sparkles.png',
            className: 'right-[18%] bottom-16 hidden w-8 lg:block',
            rotate: 15,
            delay: 0.4,
            duration: 3.6,
          },
        ]}
      />

      <div className="section-pad section-max relative z-10">
        <FadeIn>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-magenta">
            {t.services.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[1.85rem] font-bold tracking-tight text-navy text-balance sm:text-4xl md:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-4 max-w-2xl font-display text-base text-navy/70 sm:text-lg">
            {t.services.intro}
          </p>
        </FadeIn>
      </div>

      <div className="relative z-10 sm:hidden">
        <div
          ref={scrollRef}
          className="mt-8 flex gap-4 overflow-x-auto px-4 pb-2 touch-scroll no-scrollbar"
        >
          {services.map((item) => (
            <article key={item.title} className="w-[68%] max-w-[240px] shrink-0">
              <div className="overflow-hidden rounded-2xl bg-ink">
                <img
                  src={item.media}
                  alt={item.title}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 font-display text-base font-bold text-navy">{item.title}</h3>
              <p className="mt-1 font-display text-sm leading-relaxed text-navy/70">{item.copy}</p>
            </article>
          ))}
        </div>

        <div
          className="mx-auto mt-5 h-1 w-[min(72%,14rem)] overflow-hidden rounded-full bg-navy/10"
          aria-hidden="true"
        >
          <motion.div
            className="h-full origin-left rounded-full bg-gold"
            style={{ scaleX: barScale }}
          />
        </div>
      </div>

      <div className="section-pad section-max mt-10 hidden sm:block relative z-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <article className="group h-full">
                <div className="overflow-hidden rounded-2xl bg-ink">
                  <img
                    src={item.media}
                    alt={item.title}
                    className="aspect-[5/4] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 font-display text-sm leading-relaxed text-navy/70">
                  {item.copy}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="section-pad section-max mt-14 sm:mt-20 relative z-10">
        <FadeIn>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-violet">
            {t.services.benefitsEyebrow}
          </p>
          <h3 className="mt-2 max-w-2xl font-display text-xl font-bold tracking-tight text-navy sm:text-3xl">
            {t.services.benefitsTitle}
          </h3>
        </FadeIn>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {benefits.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-coral">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h4 className="mt-2 font-display text-lg font-bold text-navy">{item.title}</h4>
                <p className="mt-2 font-display text-sm leading-relaxed text-navy/70">{item.copy}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
