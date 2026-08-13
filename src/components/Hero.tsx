import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { brand } from '../data/content'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35])

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
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/img/4.jpeg"
        >
          <source src="/img/4V.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-cream" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(140,79,209,0.28),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(232,121,74,0.22),transparent_40%)]" />
      </motion.div>

      <motion.div
        style={reduceMotion ? undefined : { opacity }}
        className="relative z-10 flex min-h-[100svh] flex-col justify-end section-pad pb-24 pt-24 sm:pb-24 sm:pt-28"
      >
        <div className="section-max">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-3 font-script text-2xl text-gold sm:mb-4 sm:text-4xl"
          >
            membership
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[2.6rem] font-extrabold leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-sky">the</span>{' '}
            <span className="text-violet">fanny</span>{' '}
            <span className="text-coral">chef</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-4 max-w-xl font-display text-base leading-relaxed text-cream/90 sm:mt-5 sm:text-xl"
          >
            Yo resuelvo por ti: comida rica, orden y calma en tu cocina.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-cream px-6 py-3.5 text-center font-display text-sm font-semibold text-navy transition hover:bg-white"
            >
              Agenda tu valoración
            </a>
            <a
              href="#membresia"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-cream/40 px-6 py-3.5 text-center font-display text-sm font-semibold text-cream transition hover:border-cream hover:bg-cream/10"
            >
              Conoce la membresía
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
