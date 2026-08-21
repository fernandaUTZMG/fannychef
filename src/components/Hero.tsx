import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FloatingStickers } from './FloatingStickers'
import { useLanguage } from '../i18n/LanguageContext'

export function Hero() {
  const { t, whatsapp } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-ink text-cream"
    >
      <motion.div
        className="absolute inset-0"
        style={reduceMotion ? undefined : { y }}
      >
        <img
          src="/img/4.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/img/4.jpeg"
        >
          <source src="/img/4V.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,transparent_15%,rgba(26,18,56,0.35)_100%)]" />
      </motion.div>

      <FloatingStickers
        items={[
          {
            src: '/img/stickers/sun.png',
            className: 'right-2 top-20 w-12 sm:right-6 sm:top-24 sm:w-20 lg:right-10 lg:w-24',
            rotate: 8,
            delay: 0.35,
          },
          {
            src: '/img/stickers/sparkles.png',
            className: 'left-2 top-24 w-7 sm:left-6 sm:top-28 sm:w-12 lg:w-12',
            rotate: -12,
            delay: 0.5,
            duration: 4,
          },
        ]}
      />

      <motion.div
        style={reduceMotion ? undefined : { opacity }}
        className="relative z-10 flex min-h-[100svh] flex-col justify-end section-pad pb-24 pt-24 sm:pb-24 sm:pt-28"
      >
        <div className="section-max">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-3 font-script text-2xl text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:mb-4 sm:text-4xl"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title font-display text-[2.6rem] font-extrabold leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-sky">the</span>{' '}
            <span className="text-violet">fanny</span>{' '}
            <span className="text-coral">chef</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-4 max-w-xl font-display text-base leading-relaxed text-cream drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:mt-5 sm:text-xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-cream px-6 py-3.5 text-center font-display text-sm font-semibold text-navy shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition hover:bg-white"
            >
              {t.hero.primary}
            </a>
            <a
              href="#membresia"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-cream px-6 py-3.5 text-center font-display text-sm font-semibold text-navy shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition hover:bg-white"
            >
              {t.hero.secondary}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
